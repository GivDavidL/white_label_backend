const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  console.log(req.headers);
  const data = {
    brand: {
      details: {
        app_name: "givenergy.cloud",
        company: "GivEnergy",
        email: "123@helpme.co.uk",
        telephone: 12345678,
      },
      theme: [
        {
          light: {
            primary: "#4fbba9",
            secondary: "#86d7ef",
            yellow: "#f8dd6c",
            orange: "#f08c33",
            red: "#eb5b56",
            grey: "#9e9e9e",
            darkGrey: "#616161",
          },
          dark: {
            primary: "#4fbba9",
            secondary: "#86d7ef",
            yellow: "#f8dd6c",
            orange: "#f08c33",
            red: "#eb5b56",
            grey: "#9e9e9e",
            darkGrey: "#616161",
          },
        },
        // mainColorGreen
        // mainColorBlue
        // mainColorYellow
        // mainColorOrange
        // mainColorRed
        // mainColorGrey
        // mainColorDarkGrey
      ],
      assets: {
        "what-is-space":
          "https://starwalk.space/gallery/images/what-is-space/1140x641.jpg",
        "boomerang-nebula":
          "https://starwalk.space/gallery/images/boomerang-nebula/1140x641.jpg",
        "methuselah-star":
          "https://starwalk.space/gallery/images/methuselah-star/1140x641.jpg",
        "great-wall":
          "https://starwalk.space/gallery/images/great-wall/1140x641.jpg",
      },
    },
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
