import "./App.css";
import DragAndDrop from "./DragAndDrop";



function App() {
  const handleClick = () => {
    alert("Hello World");
  };
  return (
    <div className="App">
      <DragAndDrop file={"file"} />
      <div id="btn-container">
        <button onClick={handleClick} className="btn continue">Let's Go</button>
      </div>
      <div id="indicator-container">
        <div className="step step1"></div>
        <div className="step step2"></div>
        <div className="step step3"></div>
      </div>
    </div>
  );
}

export default App;
