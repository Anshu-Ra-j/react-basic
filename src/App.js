import React from "react";

function App() {

  const openBackend = () => {
    window.open("20.219.208.87", "_blank");
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Azure Cloud Architecture Project</h1>

      <p>Frontend hosted on Azure Static Web Apps</p>

      <button onClick={openBackend} style={{padding:"10px 20px"}}>
        Open Backend Servers
      </button>
    </div>
  );
}

export default App;
