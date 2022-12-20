const express = require('express');
const app = express();
const jwt = require("jsonwebtoken")
const JWT_SECRET = "vrevdrdkjh3dfrdsfvechjvhj"
const cors = require('cors');
const Mydata = require('./schema/data')
const mongoose = require('mongoose')
app.use(express.json())
app.use(cors())
mongoose.connect(`mongodb+srv://kishor7008:kishor7008@cluster0.h1ljklg.mongodb.net/?retryWrites=true&w=majority`, () => {
  console.log("mongo db connected")
})
app.get('/', (req, res) => {
  res.send('server started')
})
app.get('/list', async (req, res) => {
  let response = await Mydata.find()
  console.log(response);
  res.json(response)
})
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Mydata.findOne({ email });
  if (!user) {
    return res.send({ error: "user not found" })
  }
  if ((password === user.password)) {
    const token = jwt.sign({}, JWT_SECRET)

    if (res.status(201)) {
      return res.json({ status: "ok", data: token })
    } else {
      return res.json({ error: "error" })
    }
  }
  res.json({ status: "error", error: "invalid login" })
})


app.post('/register', async (req, res) => {
  const response = new Mydata(req.body);
  await response.save();
  res.json(response)
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('server started')
});