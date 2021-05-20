import React, { Component } from 'react'
import wwf from "../otherImages/wwf.png"
import greenpeace from "../otherImages/greenpeace.png"
import "./DonateStripe.css"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"


class DonateStripe extends Component {
    render() {
        const promise = loadStripe("pk_test_51IpuJBFCggon7cbVElkeXUc6tLxwsgVCb0YWHffVmoyeowZW3imPfEVShdubMHhsAQK1DVJ6ZURtR1ToI7FSlGm800QUGfQR6J");
        return (
            <>
             
                    <h1>DONATE</h1> 

                     <br/>
                     <br/>
                     <h3 class="h2-donation" > 21 For Future collaborates with some cool organizations that are trying to make our planet a more sustainable place. All the money goes equally distributed between those organizations. </h3>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                <div className="donation-back" >
                    
                    
              

                    <img className="wwfImg" src={wwf} alt="wwf organization" loading="lazy" />                


                    <div className="donationCard">
                            <Elements  stripe={promise}>
                            <CheckoutForm />
                            </Elements>
                    </div>

                    <img className="greenpeaceImg" src={greenpeace} alt="greenpeace" loading="lazy" />

                </div>


                     

            
                

                
               
             
            </>
        )
    }
}

export default DonateStripe
