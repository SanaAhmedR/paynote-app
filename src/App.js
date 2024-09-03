import { useState } from "react";
import "./App.css";
import PaynoteButton from "./paynote";

function App() {
  return (
    <div className="App">
      <PaynoteButton
        customerEmail="Rummazkhan@gmail.com"
        firstName="rummaz"
        lastName="khan"
        widgetSelector="key"
      />
    </div>
  );
}

export default App;
