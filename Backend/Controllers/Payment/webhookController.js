
const stripe = require("../../config/Stripe")

const Payment = require("../../Models/Payment")
const Home = require("../../Models/Home")







const webhook = (req , res) =>{
    try {
        const signature = req.headers["stripe-signature "]



        const event  = stripe.webhooks.constructEvent(req.body , signature , process.env.STRIPE_WEBHOOK_SECRET)

        if(event.type === "checkout.session.completed"){
            const session = event.data.object
            const userId = session.metadata.userId
            const homeId = session.metadata.homeId

            const home = await Home.findById(homeId)


            const document = Payment.create({
                owner: userId,
             propertyName: home.propertyName,
               totalPrice: session.amount_total / 100,
    paymentStatus: session.payment_status,
            })

// Now session is:
                          
// {
//     id: "cs_test_123",

//     payment_status: "paid",

//     amount_total: 5000,

//     metadata: {
//         userId: "123",
//         homeId: "456"
//     }
// }


return res.status(200).json({
    message: "Bookign history created"
})



        }

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = webhook




// function constructEvent(body, receivedSignature, secret) {

//     // THIS IS THE GENERATION
//     const generatedSignature = HMAC(body, secret);

//     // THIS IS THE COMPARISON
//     if (generatedSignature !== receivedSignature) {
//         throw new Error("Invalid Signature");
//     }

//     return body;
// }

// internally it does somehting like this


