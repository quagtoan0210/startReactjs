import './style.css';
const MyComponent = ()=>{
  const name = "join";//string
  const age = 20; //number
  const array = [1,2,3,4,5,6,7,8];
  const object = {name: "Quang", age: 20};
  return (
    <>
        <div className="child" style={{fontSize:"30px"}}>Quang {name}</div>
        <div>age: {age}</div>
        <div>MyComponent</div>
        <div>{array}</div>
        <div>{JSON.stringify(object)}</div>

    </>
  )
}
export default MyComponent;