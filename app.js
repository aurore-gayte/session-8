var app = new Vue({
  el: '#app',
  data: {
    firstName: "Aurore",
    lastName: "Gayte",
    description: "Etudiante à l'école de journalisme de Sciences Po Paris, passion pétanque",
    photo: "https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg",
    twitter: "A_gayte",
    github: "aurore-gayte",
    mail: "aurore.gayte@gmail.com",
    experiences: [{
      dateBegin: "Août 2017",
      dateEnd: false,
      name: "France Info",
      title: "Envoyé spéciale pétanque en Chine",
      description: "Reportage sur la pétanque en Chine"
    }, {
      dateBegin: "Mai 2017",
      dateEnd: "Juillet 2017",
      name: "Têtu",
      title: "Stagiare",
      description: "Rédaction d'article et d'enquêtes"
    }, {
      dateBegin: "Janvier 2016",
      dateEnd: "Mai 2016",
      name: "CNN / The Paris Bureau",
      title: "Stagiaire desk",
      description: "Rédaction d'article, aide à la réalisation de reportages"
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2018",
      name: "Master Journalisme",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2012",
      dateEnd: "2014",
      name: "Bachelor Sciences Politiques, mention relations Euro-asie",
      university: "Sciences Po Paris, campus du Havre"
    }],
    languages: ["Anglais", "Chinois", "Espagnol"],
    skills: ["Node", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})