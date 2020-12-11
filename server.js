const express = require('express');
const cors = require('cors');
const stripe= require('stripe')('sk_test_51HsDgMAT3oI0Gix50buuYLQ22UpBfM5p6zV7B1H8dBmuaeJ3QTrUqsTeR1NE8ANOs8dko26403fg2a9r830TB8Hg008p3Ep2JP');
const uuid=require('uuid');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/checkout',(req, res) => {
  res.send("welcome into react website");
});
app.post('/checkout', async(req, res) => {
  let error;
  let status;
  try{
    const {product,token}=req.body
    const customer=await stripe.customers.create({
      email:token.email,
      id:token.id
    })
    const key=uuid.v4()
    const charge=await stripe.charges.create({
      amount:product.price*100,
      currency:"usd",
      customer:customer.id,
      shipping:{
        name:token.card.name,
      }
    },
    {independentKey:key}
    )
    status="succes"
  }catch(error){
    console.log(error)
    status="error"
  } 
  res.json({status})
});
app.listen(8080, () => {
  console.log('App listening on port 8080!');
});