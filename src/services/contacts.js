phonebook.service('contactsService', function() {
  this.contacts = [   ];

  this.add = function(contact) {
    this.contacts.push(contact);
  }

  this.update = function(contact) {
    const index = this.contacts.findIndex((e) => e.name === contact.name || e.number === contact.number);
    console.log(index);
    if (index > -1) {
      this.contacts[index] = contact;
    }
  }

  this.remove = function(contact) {
    const index = this.contacts.findIndex((e) => e.name === contact.name);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
});