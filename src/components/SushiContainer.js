import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, wallet, setWallet, plates, setPlates }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const displaySushi = sushi.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
    return (
      <Sushi 
        key={sushi.id} 
        id={sushi.id} 
        sushi={sushi} 
        wallet={wallet} 
        setWallet={setWallet}
        plates={plates}
        setPlates={setPlates}
      />)
  })

  function getMoreSushi() {
    setSushiIndex(sushiIndex + 4)
  }

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton 
        setSushiIndex={setSushiIndex} 
        handleMoreClick={getMoreSushi}
      />
    </div>
  );
}

export default SushiContainer;
