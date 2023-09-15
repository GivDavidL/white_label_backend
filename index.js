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
          light: { green: "#4fbba9", blue: "#86d7ef" },
          dark: { green: "#644d3c", blue: "#eb5b56" },
        },
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
