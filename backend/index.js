const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, firstname: username },
      { headers: { "private-key": "6d3f3629-8f16-4035-8e95-0ffc30955f35" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle other types of errors
      return res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.listen(3001);
