import React, { Component } from 'react'
import wwf from "../otherImages/wwf.png"
import vivaConAgua from "../otherImages/vivaconagua.png"
import greenpeace from "../otherImages/greenpeace.png"
import "./DonateStripe.css"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"


class DonateStripe extends Component {
    render() {
        const promise = loadStripe("pk_test_51IpuJBFCggon7cbVElkeXUc6tLxwsgVCb0YWHffVmoyeowZW3imPfEVShdubMHhsAQK1DVJ6ZURtR1ToI7FSlGm800QUGfQR6J");
        return (
            <div>
                <section> 
                    <div > 
                        <h1>DONATE</h1>
                        <h2>Contribute to the cause</h2>
                        <br></br>
                        <p> 21 For Future collaborates with some cool organizations that are trying to make our planet a more sustainable place. </p>
                        <p>All the money goes equally distributed between those organizations</p>
                        <div className="donationCard">
                            <Elements  stripe={promise}>
                             <CheckoutForm />
                            </Elements>
                        </div>
                    </div>

                    <div id="partOne"> 
                        
                        <img className="wwfImg" src={wwf} alt="wwf organization" loading="lazy" />
                        <p>Their mission is to preserve nature and reduce the most pressing threats to the diversity of life on Earth.</p>
                    </div>

                    <div id="partTwo"> 
                        <p>Greenpeace uses non-violent creative action to pave the way towards a greener, more peaceful world, and to confront the systems that threaten our environment.</p>
                        <img className="greenpeaceImg" src={greenpeace} alt="greenpeace" loading="lazy" />
                    </div>

                    <div id="partThree"> 
                    <img className="vivaConAguaImg" src={vivaConAgua} alt="viva con agua" loading="lazy" />

                        <p>Viva con Agua is a network of people and organizations committed to establish access to clean drinking water and basic sanitation for all humans worldwide</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default DonateStripe
