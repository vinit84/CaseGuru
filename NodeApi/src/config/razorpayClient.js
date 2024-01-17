const Razorpay = require('razorpay');

apiKey="rzp_test_yH78yBFS1mrkNH"
apiSecret="zwOFJtPizgTs4Ek3DYd2geiY"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;