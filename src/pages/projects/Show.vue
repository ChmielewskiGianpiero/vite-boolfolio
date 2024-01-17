<template>
    <div class="container" v-if="project">
        <h1> {{ project.title }}</h1>
        <p  v-if="project.type"> {{ project.type.name }} </p>
        <ul>
            <li v-for="technology in project.technologies" :key="technology.id">
                {{ technology.name }}
            </li>
        </ul>
        <p v-html="project.content"></p>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                project: null,
                BASE_URL: 'http://127.0.0.1:8000/api'
        }
        },
        props : {
            slug: String
        },
        methods: {
            fetchPost(){
                axios.get(`${this.BASE_URL}/projects/${this.slug}`)
                .then(res =>  {
                    this.project = res.data.project
                    console.log(this.project)
                })
            }
        },
        created() {
            this.fetchPost()
        },
    }
</script>

<style lang="scss" scoped>

</style>