import React, { Component } from 'react'
import wwf from "../otherImages/wwf.png"
import vivaConAgua from "../otherImages/vivaconagua.png"
import greenpeace from "../otherImages/greenpeace.png"
import "./DonateStripe.css"


class DonateStripe extends Component {
    render() {
        return (
            <div>
                <h1>DONATE</h1>
                <h2>Contribute to the cause</h2>
                <p> 21 For Future collaborates with some cool organizations that are trying to make our planet a more sustainable place </p>
                <p>All the money goes equally distributed between those organizations</p>

                <h2>WWF </h2>
                <img className="wwfImg" src={wwf} alt="wwf organization" loading="lazy" />
                <p>Their mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.</p>
                <h2>GREENPEACE </h2>
                <p>Greenpeace uses non-violent creative action to pave the way towards a greener, more peaceful world, and to confront the systems that threaten our environment.</p>
                <img className="greenpeaceImg" src={greenpeace} alt="greenpeace" loading="lazy" />

                <h2>VIVA CON AGUA </h2>
                <p>Viva con Agua is a network of people and organizations committed to establish access to clean drinking water and basic sanitation for all humans worldwide</p>
                <img className="vivaConAguaImg" src={vivaConAgua} alt="viva con agua" loading="lazy" />
            </div>
        )
    }
}

export default DonateStripe
