import React, { useState, useEffect } from "react"
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"
import config from '../config'


export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const [money, updateMoney] = useState(1)

  const payment = () =>{
     window
      .fetch(`${config.API_URL}/api/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }], money} )
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setClientSecret(data.clientSecret)
      });
  }
  useEffect(async() => {
    if (clientSecret) {
      const payload =await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`)
        setProcessing(false)
      } else {
        setError(null)
        setProcessing(false)
        setSucceeded(true)
      }
    }
  }, [clientSecret])

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  };
  const handleSubmit = async ev => {
    ev.preventDefault()
    setProcessing(true)
    payment()
   
  };

  const handleDonation = (event) => {
    let money = event.target.value
    console.log (money) 

    updateMoney(money)


  }

  return (
    <>
    <h2> Enter your donation below</h2>
      <div  className="donationInput" >  <input  type="number" min="0" onChange={handleDonation} placeholder="0???" ></input> </div> 
    
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Donate now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded. Thanks for your contribution!
      </p>
    </form>

    </>
  )
}