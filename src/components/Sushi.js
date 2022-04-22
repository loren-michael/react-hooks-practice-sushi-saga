import React, { useState } from "react";

function Sushi({ sushi, wallet, setWallet }) {
  const [eaten, setEaten] = useState(false)

  function handleEatSushi() {
    if (wallet >= sushi.price) {
      setEaten(true);
      const updateWallet = (wallet - sushi.price);
      setWallet(updateWallet);
    } else {
      alert("You don't have the money!")
    }
  }

  return (
    <div className="sushi" onClick={handleEatSushi} >
      <div className="plate" >
        {eaten ? (
          null
        ) : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
