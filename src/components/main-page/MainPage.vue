<template>
<section>
    <header>
      <h1>CONTACTS</h1>
      <p class="headInformation">{{ friends.length }} contacts</p>
    </header>
    <Navigation></Navigation>
    <!-- <new-friend @add-contact="addContact"></new-friend> -->
    <ul>
      <input type="text" v-model="search" placeholder="Search...">
      <friend-contact
        v-for="friend in filteredContacts()"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :surname="friend.surname"
        :full-name="friend.fullName"
        :phone-number="friend.phone"
        :email-adress="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
        ></friend-contact>
    </ul>
  </section>
</template>

<script>
import Navigation from '../nav/Navigation.vue';
export default {
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel",
                    surname: "Lorenz",
                    fullName: "Manual Lorenz",
                    phone: "0123 45678 90",
                    email: "manuel@localhost.com",
                    isFavorite: true
                },
                {
                    id: "julie",
                    name: "Julie",
                    surname: "Jones",
                    fullName: "Julie Jones",
                    phone: "0987 654421 21",
                    email: "julie@localhost.com",
                    isFavorite: false
                },
            ],
            search: "",
            sumOfContacts: 0
        };
    },
    methods: {
        filteredContacts() {
            return this.friends.filter(p => {
                return p.fullName.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
            });
        },
        toggleFavoriteStatus(friendId) {
            const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        },
        deleteContact(friendId) {
            this.friends = this.friends.filter((friend) => friend.id !== friendId);
        },
    },
    components: { Navigation }
}
</script>