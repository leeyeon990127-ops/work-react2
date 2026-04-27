import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function Counter() {
  let count = 0;
  return (
    <div>
      <p>Counter : {count}</p>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Increment
      </button>  
    </div>
  );
}

function App() {
  // const bodyProps = {
  //   name : "이연수",
  //   location: "서울시",
  //   favorList: ["파스타","빵","떡볶이"],
  // }
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
