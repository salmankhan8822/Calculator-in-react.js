import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";
import "./Calculator.css";

const CalculatorApp = () => {

  let [display, setDisplay] = useState("0");

 let handleOnButton = (value) => {
  if(value === "AC"){
    setDisplay("0");
    return;
  }
  if(value === "⌫"){
    if(display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
    return;
  }

  if(value === "=") {
    try {
     setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
    return;
  }

  if(display === "0") {
    setDisplay(value)
  } else {
    setDisplay(display + value);
  }

  if (value === "%") {
  setDisplay(String(Number(display) / 100));
  return;
}
 }


  return (
    <div className="calculator-container">
      <h1 className="calculator-title">🧮 Calculator</h1>

      <div className="calculator-card">
        <CalculatorDisplay display={display}/>
        <CalculatorButtons handleOnButton={handleOnButton}/>
      </div>
    </div>
  );
};

export default CalculatorApp;