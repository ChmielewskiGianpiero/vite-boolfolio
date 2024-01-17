<script>
    export default {
        
    }
</script>

<template>
    <div class="container">
        <ul class="d-flex">
            <li>
                <router-link :to="{ name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'projects'}">Portfolio</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contacts'}">Contacts</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.d-flex{
    display: flex;
    gap: 35px;
}
</style>