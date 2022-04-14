const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyparser.json({
  strict:false
}))

const port = 3000;

app.listen(port, () =>{
  console.log("listening to port"+port)
});

app.get('/', (req, res) => {
  console.log("İstek geldi");
  const {num1, num2} =req.query;

  const result=parseInt(num1)+parseInt(num2);
  res.send(result.toString());
})


