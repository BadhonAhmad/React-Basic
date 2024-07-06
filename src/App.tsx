import { Alert } from "./Components/Alert";
import { Button } from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App(){
  const items = ["Dhaka", "Sylhet", "Rajshahi", "Khulna"];
  const handleSelectItem= (item : string) =>{
    console.log(item);
  }
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>world</span>
      </Alert>
      <Button>
        
      </Button>
    </div>
  );
}

export default App;