const Home = require("../../Models/Home")
const stripe = require("../../config/Stripe")

const createCheckoutSession =  async (req, res)=>{
    try {
      
        const home = await Home.findById(req.params.id)
        
        if(!home){
            return res.status(404).json({
                message: "Home not found"
            })
        }
        
                if(home.owner.toString() === req.user.id){
                    return res.status(500).json({
                        message: " You cant book your own property"
                    })
                }



        const session = await stripe.checkout.sessions.create({

            metadata: {
                userId: req.user.id,
                homeId: home._id.toString()
            } ,
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data:{
                            name: home.propertyName 
                        } ,
                        unit_amount: home.price *100
                    } ,

                    quantity: 1
                }
            ] ,

            mode: "payment",
            success_url: "http://localhost:5173/payment-success" ,
            cancel_url: "http://localhost:5173/payment-cancel"
        })

        return res.status(200).json({
              url: session.url
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = createCheckoutSession