<template>
  <body>
    <h1>PHONEBOOK</h1>
    <form id="contactForm" @submit.prevent="createItem" method="post">
        <input type="text" id="name" v-model="data.name" placeholder="Name" required>
        <input type="email" id="email" v-model="data.email" placeholder="Email" required>
        <input type="text" id="phoneNo" v-model="data.phoneNo" placeholder="Phone" required>
        <button type="submit">Add Contact</button>
        &nbsp;
        <button @click="getListItem">Refresh Data</button>
    </form>
    <table id="contactsTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phoneNo }}</td>
          <td>
            <button @click="updateItem(item)">Update</button>
            <button @click="deleteItem(index)">Delete</button>
          </td>
        </tr>
        </tbody>
    </table>
  </body>
</template>

<script>
import PhonebookService from "../services/PhonebookService";
export default {
  data(){
    return {
      items: [],
      data: {}
    };
  },

  methods: {
    getListItem() {
      PhonebookService.getListContact()
        .then((res) => {
          console.info("data : ", res);
          this.items = res.data.data;

        })
        .catch((err) => {
          console.err("err : ", err.message);
        });
    },

    createItem() {
      PhonebookService.createContact(this.data)
      .then((res) => {
        this.data = res.data.data;
         
      })
      .catch((err) => {
        console.error("err : ", err.message);
      });
    },

    readItem() {
      PhonebookService.read(this.data)
      .then((res) => {
        this.data = res.data.data;
         
      })
      .catch((err) => {
        console.error("err : ", err.message);
      });
    },


    updateItem(item) {
      PhonebookService.updateContact(item)
        .then((res) => {
          this.data = res.data.data;
          this.getListItem();
        })
        .catch((err) => {
          console.error("err : ", err.message);
        });
    },

    deleteItem(row) {

      console.info("info row : ", row);

    //   PhonebookService.deleteContact(this.data)
    //   .then((res) => {
    //     this.data = res.data.data;
    //   })
    //   .catch((err) => {
    //     console.error("err : ", err.message);
    //   });
      
      this.items.splice(row, 1);
      //this.getListItem();
    },
  },

  mounted() {
    this.getListItem();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
table,
th,
td {
  border: 1px solid #000;
}
th,
td {
  padding: 10px;
  text-align: left;
}
</style>
