import React from "react";
import ColorChanger from "./colorchanger";

function App() {
  return (
    <div style={{ textAlign:'center',marginTop:'10px'}}>
      <h1 style={{ borderButton:'2px solid blue',color:'Red'}}>text effect</h1>

    <ColorChanger/>
    
    </div>
  );
}

export default App;