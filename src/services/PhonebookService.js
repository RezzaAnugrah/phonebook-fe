import http from "../http-common";

class PhonebookService {
  getListContact() {
    return http.get("/phonebook/");
  }

  getContactByName(data) {
    return http.get("/phonebook/read", data);
  }

  createContact(data) {
    return http.post("/phonebook/add", data);
  }

  updateContact(data) {
    return http.put("/phonebook/update", data);
  }

  deleteContact(data) {
    return http.delete("/phonebook/delete", data);
  }
}

export default new PhonebookService();