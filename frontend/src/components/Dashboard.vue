<template>
  <div>
    <div class="dashboard">
      <VisualizeSurface :Title="title" :ZTitle="ztitle" :DataSet="dataset"></VisualizeSurface>
    </div>
    <div class="buttons_set">
      <button class="button is-primary" @click="changeDataset1">Density Average</button>
      <button class="button is-primary" @click="changeDataset4">Density Max</button>
      <button class="button is-primary" @click="changeDataset2">Melt Flow Index Average</button>
      <button class="button is-primary" @click="changeDataset3">Melt Flow Index Max</button>
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
      dataset: "",
      title: "",
      ztitle: ""
    };
  },
  methods: {
    changeDataset1: function() {
      (this.dataset = "avg_density"),
        (this.title = "Density Average"),
        (this.ztitle = "Density");
    },
    changeDataset2: function() {
      (this.dataset = "avg_mi"),
        (this.title = "Melt Flow Index Average"),
        (this.ztitle = "Melt Flow Index");
    },
    changeDataset3: function() {
      (this.dataset = "max_mi"),
        (this.title = "Melt Flow Index Max"),
        (this.ztitle = "Melt Flow Index");
    },
    changeDataset4: function() {
      (this.dataset = "max_density"),
        (this.title = "Density Max"),
        (this.ztitle = "Density");
    }
  }
};
</script>
<style scoped>
</style>