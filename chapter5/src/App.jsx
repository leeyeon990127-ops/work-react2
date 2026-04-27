import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComp() {
  return <div>Child component</div>;
}

function App() {
  // const bodyProps = {
  //   name : "이연수",
  //   location: "서울시",
  //   favorList: ["파스타","빵","떡볶이"],
  // }
  return (
  <div>
    <Header />
    <Body>
      <ChildComp />
    </Body>
    <Footer />
  </div>
  )
}

export default App;
