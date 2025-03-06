var GLITCH_URL = "https://ffadh.github.io/trello-powerup"; // Ganti dengan URL GitHub Pages yang benar

window.TrelloPowerUp.initialize({
  "card-back-section": function (t, options) {
    return {
      title: "Custom Fields",
      icon: GLITCH_URL + "/icon.png", // Ganti dengan icon Power-Up kamu
      content: {
        type: "iframe",
        url: t.signUrl(GLITCH_URL + "/card.html"), // Sesuaikan dengan URL card.html di GitHub Pages
        height: 200
      }
    };
  },
  "board-buttons": function (t, options) {
    return [
      {
        icon: GLITCH_URL + "/icon.png", 
        text: "Settings",
        callback: function (t) {
          return t.popup({
            title: "Custom Field Settings",
            url: GLITCH_URL + "/settings.html", 
            height: 250
          });
        }
      }
    ];
  }
});
