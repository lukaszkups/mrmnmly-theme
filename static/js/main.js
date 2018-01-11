const app = {
  getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  },

  setCurrentYearInFooter() {
    const currentYear = this.getCurrentYear();
    const yearDomWrapper = document.getElementById('fotter__year');
    if (yearDomWrapper) {
      yearDomWrapper.textContent = currentYear;
    }
  },

  setYearsOfExperience () {
    const startingYear = 2011;
    const currentYear = this.getCurrentYear();
    const yearsOfExperience = currentYear - startingYear;
    const yearsOfExperienceDomWrapper = document.getElementById('experience__years-counter');
    if (yearsOfExperienceDomWrapper) {
      yearsOfExperienceDomWrapper.textContent = yearsOfExperience;
    }
  },

  startAnalytics () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-112058724-1');
  },

  init() {
    this.setCurrentYearInFooter();
    this.setYearsOfExperience();
    this.startAnalytics();
  },
};

app.init();