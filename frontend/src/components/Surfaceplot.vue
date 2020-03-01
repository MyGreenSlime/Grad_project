<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script>
import Plotly from "plotly.js-dist";
export default {
  props: ["Title", "ZTitle", "DataSet"],
  created() {
    this.initData();
  },
  mounted() {
    this.plotSurface();
  },
  data() {
    return {
      ZData: {
        data: [],
        max: null,
        min: null
      },
      XData: [],
      YData: [],
    };
  },
  methods: {
    initData() {
      let i = 2;
      while (i <= 8) {
        this.XData.push(i.toFixed(1));
        i = i + 0.1;
      }
      i = 30;
      while (i <= 120) {
        this.YData.push(i.toFixed(1));
        i = i + 1;
      }
    },
    getZData() {
      let maxZ = 0;
      let minZ = 10;
      this.ZData["data"] = this.DataSet;
      this.DataSet.map(row => {
        maxZ = Math.max(...row, maxZ);
        minZ = Math.min(...row, minZ);
      });
      this.ZData["min"] = minZ;
      this.ZData["max"] = maxZ;
    },
    plotSurface() {
      let data = [
        {
          name: "",
          z: this.ZData["data"],
          x: this.XData,
          y: this.YData,
          type: "surface",
          showscale: true,
          colorscale: [["0", "rgb(255,0,0)"][("1", "rgb(0,255,0)")]],
          cmax: this.ZData["max"],
          cmin: this.ZData["min"]
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
    },
   
  },
  computed: {},
  watch: {
    Title: function(newTitle, oldTitle) {
      if(newTitle != ""){
        this.getZData()
        this.plotSurface();
      } else {
        this.ZData['data'] = []
        this.plotSurface();
      }
    
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