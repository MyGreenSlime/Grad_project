<template>
  <div class="container">
    <div>
      <h1 class="title is-4">Relationship Mapping</h1>
    </div>
    <div class="columns">
      <div class="column is-3 is-offset-9 selected">
        <div class="field">
          <label class="label">Method</label>
          <div class="control">
            <div class="select">
              <select v-model="method" @change="handleSelected">
                <option>Density Average</option>
                <option>Density Max</option>
                <option>Melt Flow Index Average</option>
                <option>Melt Flow Index Max</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard">
      <VisualizeSurface :Title="title" :ZTitle="ztitle" :DataSet="dataset"></VisualizeSurface>
    </div>
    
  </div>
</template>
<script>
import VisualizeSurface from "./visualize_surface";
export default {
  components: {
    VisualizeSurface
  },
  data: function() {
    return {
      method : "",
      dataset: "",
      title: "",
      ztitle: ""
    };
  },
  methods: {
    handleSelected : function(){
      if(this.method == "Density Average"){
        this.dataset = "avg_density"
        this.title = "Density Average"
        this.ztitle = "Density";
      } else if(this.method == "Density Max"){
        this.dataset = "max_density"
        this.title = "Density Max"
        this.ztitle = "Density"

      } else if(this.method == "Melt Flow Index Average"){
        this.dataset = "avg_mi"
        this.title = "Melt Flow Index Average"
        this.ztitle = "Melt Flow Index"
      } else if(this.method == "Melt Flow Index Max"){
        this.dataset = "max_mi"
        this.title = "Melt Flow Index Max"
        this.ztitle = "Melt Flow Index"
      }
    }
  }
};
</script>
<style scoped>
</style>