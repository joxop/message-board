var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "We haven't spoke in a while, just checking in?",
    user: "Mike Cruz",
    added: new Date(),
  },
  {
    text: "Lets do Lunch on Sunday",
    user: "Jessica Garner",
    added: new Date(),
  },
  { text: "how did the meeting go?", user: "Sandra Levy", added: new Date() },
  {
    text: "Congrats on the new position",
    user: "Herald Bisby",
    added: new Date(),
  },
  {
    text: "lets try that MMA Class ive been telling you about",
    user: "Felix Brown",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  const newURL = 'http://' + req.headers.host + '/new';
  res.render("index", { title: "Express", messages, newURL: {url: newURL} });
});

router.get("/new", (req, res, next) => {
  res.render("form", { heading: "New Message" });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
