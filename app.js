
const app = Vue.createApp({
  data() {
    return {
      showDetails: false,
      edit: false,
      message: 'My Contacts',
      contacts: [
        {
         name: 'Kemal Aydin',
         email: 'kemal.aydin@franklin.edu',
         age: 44,
         link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
           name: 'Kemal Aydin',
           email: 'kemal.aydin@franklin.edu',
           age: 44,
           link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
         name: 'Kemal Aydin',
         email: 'kemal.aydin@franklin.edu',
         age: 44,
         link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
         name: 'Kemal Aydin',
         email: 'kemal.aydin@franklin.edu',
         age: 44,
         link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
         name: 'Kemal Aydin',
         email: 'kemal.aydin@franklin.edu',
         age: 40,
         link: 'https://www.linkedin.com/in/kaydin/'
        }

      ]
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleEdit() {
      this.edit = !this.edit;
    }
  }
});

app.mount('#app');
