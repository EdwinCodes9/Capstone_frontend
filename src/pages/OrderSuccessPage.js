import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { useLottie } from "lottie-react";
import animationData from "../Assests/animations/79952-successful.json";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
    const options = {
        animationData: animationData,
        loop: true
      };
    
      const { View } = useLottie(options);
    
      return <>{View}</>;
};

export default OrderSuccessPage;