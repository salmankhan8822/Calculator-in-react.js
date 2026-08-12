# 🧮 React Calculator

A clean and responsive calculator application built with **React.js**. This project focuses on practicing React component structure, state management, event handling, and JavaScript calculation logic.

The calculator provides basic arithmetic operations with a simple and user-friendly interface.

## 🚀 Live Demo
https://calculator-build-with-react.vercel.app/

## ✨ Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* `%` Percentage calculation
* `AC` Clear all
* `⌫` Delete the last character
* `.` Decimal numbers
* `=` Calculate result
* Responsive calculator layout
* Component-based React architecture
* Clean and simple user interface

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**
* **React Hooks**
* **Git & GitHub**

## 📂 Project Structure


src/
│
├── App.jsx
├── main.jsx
│
├── CalculatorApp.jsx
├── CalculatorButtons.jsx
├── CalculatorDisplay.jsx
│
└── Calculator.css
```

### Component Overview

#### `App.jsx`
The main application component that loads the calculator.

#### `CalculatorApp.jsx`
Contains the main calculator logic and manages the calculator display using React state.

#### `CalculatorDisplay.jsx`
Responsible for displaying the current calculator value.

#### `CalculatorButtons.jsx`
Contains the calculator button data and renders the buttons dynamically using `.map()`.

#### `Calculator.css`
Contains all the styling for the calculator.

#### `main.jsx`
The entry point of the React application.

## 🧠 What I Practiced
This project helped me practice several important React and JavaScript concepts:

### React State
I used `useState()` to store and update the calculator display.

```jsx
const [display, setDisplay] = useState("0");
```

### Props

The calculator passes data and functions between components.
```jsx
<CalculatorDisplay display={display} />
```
and:

```jsx
<CalculatorButtons
  handleOnButton={handleOnButton}
/>
```

### Event Handling

Each button uses `onClick` to trigger the calculator logic.
onClick={() => handleOnButton(button.value)}


### Array `.map()`

The calculator buttons are stored in an array and rendered dynamically.

```jsx
buttons.map((button) => (
  <button key={button.id}>
    {button.value}
  </button>
))
```

### Conditional Logic

Different buttons perform different actions.

For example:

if (value === "AC") {
  setDisplay("0");
}


### Error Handling

The calculation is wrapped in `try...catch` so invalid expressions don't crash the application.

```jsx
try {
  setDisplay(eval(display).toString());
} catch {
  setDisplay("Error");
}
```



Install dependencies:

```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open the local URL shown in your terminal.

## 🎯 How It Works

The calculator follows a simple flow:

```text
User clicks button
       ↓
handleOnButton() receives value
       ↓
Check which button was clicked
       ↓
Update React state
       ↓
Display updates automatically
```

For example, when the user clicks `7`:

```text
Click "7"
   ↓
handleOnButton("7")
   ↓
setDisplay("7")
   ↓
React updates the display

If the user then clicks `+`:

```text
Click "+"
   ↓
handleOnButton("+")
   ↓
display becomes "7+"
```

Then clicking `2`:

```text
Click "2"
   ↓
handleOnButton("2")
   ↓
display becomes "7+2"
```

Finally, clicking `=` calculates the expression.

## ⚠️ Note About `eval()`

This project currently uses JavaScript's `eval()` function to evaluate mathematical expressions.

```jsx
eval(display)
```

This was used as a simple way to practice calculator logic.
However, `eval()` is generally **not recommended for production applications** because it executes strings as JavaScript code.
A future version of this project can replace `eval()` with a custom calculation/parser system.

## 🔮 Future Improvements

Some improvements I plan to add:

* [ ] Keyboard support
* [ ] Better decimal handling
* [ ] Prevent multiple operators
* [ ] Better percentage calculations
* [ ] Calculation history
* [ ] Dark/light theme
* [ ] Improved mobile responsiveness
* [ ] Remove `eval()` and implement custom calculation logic
* [ ] Add automated tests

## 👨‍💻 Author

**salmankhan**

## ⭐ Support

If you found this project useful or you're also learning React, consider giving the repository a ⭐ on GitHub.

---

### 📌 Learning Project

This project was created as part of my journey to improve my **JavaScript and React logic-building skills**.

The main goal was not just to build a calculator, but to understand how React components, state, props, events, arrays, and JavaScript logic work together.
