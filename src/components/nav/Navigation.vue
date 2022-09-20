<template>
<ul class="navigationBar">
    <button @click="newContactPage" class="button">Add
      <font-awesome-icon icon="fa-solid fa-plus" />
    </button>
    <button class="button">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
    <router-view></router-view>
</ul>
</template>

<script>
export default {
    methods: {
        newContactPage() {
          this.$router.push('/adding-contact');
        },
    }
}
</script>
