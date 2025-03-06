var BASE_URL = "https://ffadh.github.io/trello-powerup/"; // Sesuaikan dengan GitHub Pages Anda

window.TrelloPowerUp.initialize({
    "card-back-section": function (t, options) {
        return {
            title: "Custom Fields",
            icon: BASE_URL + "/icon.png",
            content: {
                type: "iframe",
                url: t.signUrl(BASE_URL + "/card.html"),
                height: 200
            }
        };
    },
    "board-buttons": function (t, options) {
        return [
            {
                icon: BASE_URL + "/icon.png",
                text: "Settings",
                callback: function (t) {
                    return t.popup({
                        title: "Custom Field Settings",
                        url: BASE_URL + "/settings.html",
                        height: 250
                    });
                }
            }
        ];
    }
});
