<template>
  <li>
    <h2>{{ name }} {{ surname }} {{ isFavorite ? "(Favourite)" : ''}}
      <font-awesome-icon icon="fa-solid fa-star" />
    </h2>
    <button @click="toggleFavoriteStatus" class="button">
      <font-awesome-icon icon="fa-solid fa-star" />
    </button>
    <router-link :to="{ name: 'Contacts', params: {firstname: name, lastname: surname} }">
      <font-awesome-icon icon="fa-solid fa-circle-info" />
    </router-link>
    <!-- <a @click="toggleDetails" class="button"> -->
    <!-- {{ detailsAreVisible ? 'Hide' : 'Show' }}Details -->
    <!-- </a> -->
    <a @click="toggleDelete" class="button">
      <font-awesome-icon icon="fa-solid fa-trash" />
    </a>
  </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },  
        surname: {
            type: String,
            required: true
        }, 
        fullName: {
            type: String,
            required: true
        }, 
        phoneNumber: {
            type: String,
            required: true
        }, 
        emailAdress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        }     
    },
    emits: ['toggle-favorite', 'delete'],

   data() {
     return {
       detailsAreVisible: false      
     };
   },
  methods: {
    //   toggleDetails() {
    //     this.detailsAreVisible = !this.detailsAreVisible;
    //  },
    toggleFavoriteStatus () {
        this.$emit('toggle-favorite', this.id);
    },
    toggleDelete () {
      if (confirm("Do you really want to delete?")){
        this.$emit('delete', this.id);
      }
    }
  },
  created() {
    console.log(this.id, "test");
  }

};
</script>
