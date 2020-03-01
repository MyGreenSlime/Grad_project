<template>
  <div class = 'container'>
    <div>
      <h1 class="title is-4"> Prediction Density & Melt Flow Index</h1>
    </div>
    <div class = "columns">
       <div class="file has-name is-primary is-fullwidth column is-5" >
        <label class="file-label">
          <input class="file-input" type="file" name="csv" ref='file' @change="handleFileUpload"/>
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">{{filename}}</span>
        </label>
      </div>
      <div class="column is-3">
        <button :disabled="disable" class="button is-primary" @click="handleUpload">Predict</button>
      </div>
    </div>
     
    <div class="columns">
      <div class='column is-5'>
        <p class="title is-2">
          Density : {{Density}} 
        </p>
      </div>
      <div class='column is-5'>
        <p class="title is-2">
          Mi : {{Mi}} 
        </p>
      </div>
    </div>
    <div class='dashboard'>
      <Surfaceplot :Title="filename" ZTitle="distribution of molecular weight" :DataSet="Dataset"></Surfaceplot>
    </div>
    <loader v-if="loading"></loader>
  </div>
</template>
<script>
import axios from 'axios'
import Surfaceplot from "./Surfaceplot"
import loader from './loader'
export default {
  components : {
    Surfaceplot,
    loader
  },
  mounted() {
    console.log("in")
  },
  data : function(){
    return {
      Density : "",
      Mi : "",
      file :  null,
      filename : "",
      disable : true,
      Dataset : null,
      loading : false,
    }
  },
  methods: {
    async handleFileUpload(){
      this.file = this.$refs.file.files[0]
      if(this.file){
        
        const fileContent = await this.file.text();
        let rows = fileContent.split("\n").slice(0,-1)
        let data =  rows.map(row => {
          let tempData = row.split(",")
          return tempData.map(col => {
            return parseFloat(col)
          })
        })
        this.Dataset = data
        this.filename = this.file.name
        this.disable = false
        
      } else {
        this.filename = ""
        this.disable = true
      }
      this.Density = ""
      this.Mi = ""
      
    },
    async handleUpload(){
      let formData = new FormData()
      formData.append('file', this.file)
      this.loading = true
      try{
        let response = await axios.post("/prediction/upload", formData)
        let data = response.data.detail
        this.Density = data['Density']
        this.Mi = data['Mi']
      }
      catch(err){
        console.log(err)
      }
      this.loading = false
    }
  },
};
</script>
<style scoped>
</style>