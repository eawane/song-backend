const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "We Found Love",
      artist: "Rihanna",
      popularity: 10,
      releaseDate: new Date(2011, 9, 22),
      genre: ["electro house"]
    },
    {
      title: "Happy",
      artist: "Pharrell Williams",
      popularity: 10,
      releaseDate: new Date(2013, 11, 21),
      genre: ["soul", "new soul"]
    }
  ];

  res.json(songs);
});

app.use("/api", router);

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});