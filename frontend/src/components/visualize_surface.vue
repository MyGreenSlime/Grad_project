<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script>
import Plotly from "plotly.js-dist";
import output_avg_mi from "../assets/output_avg_mi.csv";
import output_avg_density from "../assets/output_avg_density.csv";
import output_max_mi from "../assets/output_max_mi.csv";
import output_max_density from "../assets/output_max_density.csv";
export default {
  props: ["Title", "ZTitle", "DataSet"],
  created() {
    this.initData();
    Object.keys(this.csvData).map(async key_csv => {
      await this.getZData(key_csv, this.csvData[key_csv]);
    });
  },
  mounted() {
    let data = [
        {
          name: "",
          z: [],
          x: this.XData,
          y: this.YData,
          type: "surface",
          showscale: true,
          colorscale: [["0", "rgb(255,0,0)"][("1", "rgb(0,255,0)")]],
          cmax: 0,
          cmin: 0
        }
      ];
      let layout = {
        title: {
          text: this.Title,
          font: {
            family: "Courier New, monospace",
            size: 24
          }
        },
        scene: {
          xaxis: { title: "LogMW" },
          yaxis: { title: "Temperature" },
          zaxis: { title: "" }
        }
      };
    Plotly.newPlot("chart",data, layout,{ responsive: true });
  },
  data() {
    return {
      ZData: {
        avg_density: {
          data: [],
          max: null,
          min: null
        },
        avg_mi: {
          data: [],
          max: null,
          min: null
        },
        max_density: {
          data: [],
          max: null,
          min: null
        },
        max_mi: {
          data: [],
          max: null,
          min: null
        }
      },
      XData: [],
      YData: [],
      csvData: {
        avg_density: output_avg_density,
        avg_mi: output_avg_mi,
        max_density: output_max_density,
        max_mi: output_max_mi
      }
    };
  },
  methods: {
    initData() {
      let i = 3.7;
      while (i <= 5.7) {
        this.XData.push(i.toFixed(1));
        i = i + 0.1;
      }
      i = 30;
      while (i <= 95) {
        this.YData.push(i.toFixed(1));
        i = i + 1;
      }
    },
    async getZData(key, csvData) {
      let maxZ = 0;
      let minZ = 10;
      await Plotly.d3.csv(csvData, (error, rows) => {
        let Columns = Object.keys(rows[0]);
        rows.map(row => {
          let tempRowData = Columns.map(col => {
            if (!row[col]) {
              return 0;
            } else {
              return row[col];
            }
          });
          maxZ = Math.max(...tempRowData, maxZ);
          minZ = Math.min(...tempRowData, minZ);
          this.ZData[key]["data"].push(tempRowData);
          this.ZData[key]["min"] = minZ;
          this.ZData[key]["max"] = maxZ;
        });
      });
    },
    plotSurface() {
      let data = [
        {
          name: "",
          z: this.ZData[this.DataSet]["data"],
          x: this.XData,
          y: this.YData,
          type: "surface",
          showscale: true,
          colorscale: [["0", "rgb(255,0,0)"][("1", "rgb(0,255,0)")]],
          cmax: this.ZData[this.DataSet]["max"],
          cmin: this.ZData[this.DataSet]["min"]
        }
      ];
      let layout = {
        title: {
          text: this.Title,
          font: {
            family: "Courier New, monospace",
            size: 24
          }
        },
        scene: {
          xaxis: { title: "LogMW" },
          yaxis: { title: "Temperature" },
          zaxis: { title: this.ZTitle }
        }
      };
      Plotly.newPlot("chart", data, layout, { responsive: true });
    }
  },
  computed: {},
  watch: {
    DataSet: function(newQuestion, oldnewQuestion) {
      this.plotSurface();
    }
  }
};
</script>
<style scoped>
#chart {
  width: 75vw;
  height: 80vh;
  margin: 0 auto;
  padding: 0 auto;
}
</style>