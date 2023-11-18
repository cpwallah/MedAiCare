// Import React and CSS modules
import React from "react";
import "../styles/pricing.css";

// Create a PricingCard component that takes props for title, description, price, and features
function PricingCard(props) {
  return (
    <div className="pricing-card">
      <h3 className="pricing-card-title">{props.title}</h3>
      <p className="pricing-card-description">{props.description}</p>
      <p className="pricing-card-price">{props.price}</p>
      <ul className="pricing-card-features">
        {props.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="buton" variant="contained" color="primary" onClick={props.onClick}>
        Buy Now
      </button>
    </div>
  );
}

// Create a Pricing component that renders three PricingCard components
function Pricing() {
    function handleBuyNow(title) {
        alert(`You have selected the ${title} plan.`);
      }
  return (
    
    <div className="pricing container">
        <h1 className="pricing-heading">Our Amazing Plans</h1>
      <div className="pricing-cards">
        <PricingCard
          title="Basic"
          price="$9.99/month"
          features={[
            "20 Image Detections per day",
            "30 Chatbot requests per day",
            "Discounts on Health Insurance"
          ]}
          // Pass the handleBuyNow function as a prop with the title argument
          onClick={() => handleBuyNow("Basic")}
        />
        <PricingCard
          title="Advance"
          price="$19.99/month"
          features={[
            "50 Image Detections per day",
            "Unlimited Chatbot requests per day",
            "Discounts on Health Insurance"
          ]}
          // Pass the handleBuyNow function as a prop with the title argument
          onClick={() => handleBuyNow("Advance")}
        />
        <PricingCard
          title="Enterprise"
          price="$29.99/month"
          features={[
            "Unlimited Image Detections per day",
            "Unlimited Chatbot requests per day",
            "Discounts on Health Insurance"
          ]}
          // Pass the handleBuyNow function as a prop with the title argument
          onClick={() => handleBuyNow("Enterprise")}
        />
      </div>
    </div>
  );
}

// Export the Pricing component
export default Pricing;
