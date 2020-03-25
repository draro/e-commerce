import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_a8TKGOIDxRDDXKkcVDgXYsJz'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name = 'iSmile Ltd'
            billingAddress
            shippingAddress
            image='https://genius-face.herokuapp.com/static/media/Logo.1330fb23.png'
            description={`Your total is ${price}$`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}
export default StripeCheckoutButton