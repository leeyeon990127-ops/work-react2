import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComp() {
  return
    <div> child component</div>;
}

function App() {
  // const bodyProps = {
  //   name : "이연수",
  //   location: "서울시",
  //   favorList: ["파스타","빵","떡볶이"],
  // }
  return (
    <div className="App">
      <Header />
      <Body>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
