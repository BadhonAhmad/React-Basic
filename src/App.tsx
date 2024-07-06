import ListGroup from "./Components/ListGroup";

function App(){
  const items = ["Dhaka", "Sylhet", "Rajshahi", "Khulna"];
  const handleSelectItem= (item : string) =>{
    console.log(item);
  }
  return <div><ListGroup items={items} heading = 'Cities' onSelectItem={handleSelectItem}/></div>
}

export default App;