<script>
  export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
  }
  
</script>

<template>
  <div class="card card-project">
    <h1>{{project.title}}</h1>
    <p v-if="project.type"><strong>{{ project.type.name }}</strong></p>
    <p v-if="project.technologies"><strong>{{ project.technologies.name }}</strong></p>

  </div>

  <!-- <div class="container">
    <div class="grid">
        <div class="card project-card" 
        v-for="project in projects"
        :key="project.id">
            <h2>{{ project.title }}</h2>
            <p>{{ project.content }}</p>
        </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>

.card.card-project {
    border: 5px solid black;
    padding: 20px;
    margin: 50px;
}
</style>