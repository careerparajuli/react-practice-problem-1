import './App.css';
import Counter from "./Component/Counter"

function App(props) {

  const AlertIncrement =() => alert('Increment');
  const AlertDecrement =() => alert('Decrement');



  return (
    <div className="App">
      <header className="App-header">
        <Counter 
            increment = "INCREAMENT" 
            decrement= "DECREMENT"      
        />
        <Counter 
            increment = "INCREAMENT"  
            decrement= "DECREMENT" 
            alert  = {AlertIncrement}
        />

      </header>
    </div>
  );
}

export default App;
