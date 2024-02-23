const Razorpay = require('razorpay');

apiKey="rzp_test_AJvRfhYjQPjw4D"
apiSecret="Wiqc6GE7B0R2W8qCf6Q92e0y"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;