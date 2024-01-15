<script>
import axios from 'axios';
  export default {
    data(){
      return {
       projects: [],
       BASE_URL: 'http://127.0.0.1:8000/api'
      }
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.BASE_URL}/projects`)
            .then((res) => {
                console.log(res)
            })
        }
    },
    created(){
        this.fetchProjects()
    }
  }
</script>

<template>
  <div class="container">
    <h1>homepage projects</h1>
  </div>

  <div class="container">
    <div class="grid">
        <div class="card project-card" 
        v-for="project in projects"
        :key="project.id">
            <h2>{{ project.title }}</h2>
            <p>{{ project.content }}</p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>