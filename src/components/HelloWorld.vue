<template>
  <body>
    <h1>Contact Management</h1>
    <form id="contactForm" @submit.prevent="create" method="post">
        <input type="text" id="name" placeholder="Name" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="text" id="phone" placeholder="Phone" required>
        <button type="submit">Add Contact</button>
    </form>
    <table id="contactsTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
  </body>
</template>

<script>
import PhonebookService from "../services/PhonebookService";
export default {
  data(){
    return {
      data: {}
    };
  },

  methods: {
    getListContact() {
      PhonebookService.getListContact()
        .then((res) => {
          console("data : " , res);
          this.items = res.data.data;

        })
        .catch((err) => {
          console.err("err : ", err.message);
        });
    },

    create() {
      PhonebookService.createContact(this.data)
      .then((res) => {
        this.data = res.data.data;
         
      })
      .catch((err) => {
        console.error("err : ", err.message);
      });
    },

    read() {
      PhonebookService.read(this.data)
      .then((res) => {
        this.data = res.data.data;
         
      })
      .catch((err) => {
        console.error("err : ", err.message);
      });
    },


    update() {
      PhonebookService.updateContact(this.data)
        .then((res) => {
          this.data = res.data.data;
          this.$router.push({name:'binGateway'});
        })
        .catch((err) => {
          console.error("err : ", err.message);
        });
    },

    deleteRow(row) {
      PhonebookService.deleteContact(this.data)
      .then((res) => {
        this.data = res.data.data;
      })
      .catch((err) => {
        console.error("err : ", err.message);
      });
      
      this.items.splice(row.originalIndex, 1);
    },
  },

  mounted() {
    this.getListContact();
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
