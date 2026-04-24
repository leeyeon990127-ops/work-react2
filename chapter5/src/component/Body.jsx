import "./Body.css";

function Body(props) {
    const { name, location } = props;
    console.log(name, location);
    return (
        <div className="body">
        {name}는 {location}에 거주합니다.   
        </div>
    );
}
export default Body;