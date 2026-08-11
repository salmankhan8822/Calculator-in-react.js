const CalculatorDisplay = ( {display} ) => {
  return (
    <div className="display">
      <input type="text" className="display-input" placeholder="0" value={display} readOnly />
    </div>
  );
};

export default CalculatorDisplay;