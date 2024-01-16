<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
  export default {
    components: {
      ProjectCard
    },
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
                // per stampare i dati col paginate
                 this.projects = res.data.results.data

                // per stampare i dati col ::all
                //  this.projects = res.data.results

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
        <ProjectCard class="card project-card" 
        v-for="project in projects"
        :key="project.id"
        :project="project"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4,1fr);
}

</style>