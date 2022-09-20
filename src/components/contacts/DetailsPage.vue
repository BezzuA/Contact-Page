<template>
<section>
    <header>
      <h1>DETAILS</h1>
    </header>
    <button @click="backToMainPage" class="button">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </button>
      <h2>{{ name }} {{ surname }}</h2>
    <ul>
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ id }}
      </li>
    </ul>
</section>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.lastname);
    return {
      id,
    };
  },
      methods: {
        backToMainPage() {
            this.$router.push("/main-page");
        }
    },
};
</script>
