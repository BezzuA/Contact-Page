<template>
<section>
    <header>
      <h1>ADD NEW CONTACT</h1>
    </header>
    <form @submit.prevent="submitData">
    <button @click="backToMainPage" class="button">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </button>
    <div>
        <label>Name</label>
        <input type="text" v-model="enteredName"/>
    </div>
    <div>
        <label>Surname</label>
        <input type="text" v-model="enteredSurname" />
    </div>
    <div>
        <label>Phone</label>
        <input type="phone" v-model="enteredPhone" />
    </div>
    <div>
        <label>E-mail</label>
        <input type="email" v-model="enteredEmail" />
    </div>
    <div>
        <button @click="add-contact" class="button" 
        :disabled="!this.enteredName & !this.enteredSurname">Add contact
        </button>
    </div>
</form>
</section>
</template>

<script>
export default {
    emits: ['add-contact'],
    data () {
        return {
            enteredName: '',
            enteredSurname: '',
            fullName: '',
            enteredPhone: '',
            enteredEmail: '',
        };
    },
    methods: {
        addContact (name, surname, fullName, phone, email) {
          const newFriendContact = {
            id: new Date().toISOString(),
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            fullName: fullName,
            isFavorite: false
          };
          this.friends.push(newFriendContact);
        },
        submitData() {
            this.$emit(
            'add-contact', 
            this.enteredName,
            this.enteredSurname, 
            this.fullName = this.enteredName + this.enteredSurname,
            this.enteredPhone, 
            this.enteredEmail,
            );
        },
        backToMainPage() {
            this.$router.push('/main-page');
        },
    },
};
</script>