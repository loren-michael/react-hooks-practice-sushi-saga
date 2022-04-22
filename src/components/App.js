import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [wallet, setWallet] = useState(100);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushi => setSushi(sushi))
  }, [])


  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi} 
        wallet={wallet} 
        setWallet={setWallet} 
        plates={plates}
        setPlates={setPlates}
      />
      <Table 
        wallet={wallet} 
        plates={plates}
      />
    </div>
  );
}

export default App;
