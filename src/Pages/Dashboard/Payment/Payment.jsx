import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../Hook/useCart';

// TODO provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);



const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
      <div>
        <SectionTitle
          heading={`payment`}
          subHeading={`Please process`}
        ></SectionTitle>
        <h2 className="text-3xl">Taka o teka uria uira aso .....</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    );
};

export default Payment;