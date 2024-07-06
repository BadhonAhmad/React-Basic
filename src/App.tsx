import { useState } from "react";
import { Alert } from "./Components/Alert";
import { Button } from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App(){
  const items = ["Dhaka", "Sylhet", "Rajshahi", "Khulna"];
  const handleSelectItem= (item : string) =>{
    console.log(item);
  }

    const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <div> 
        <Button color = "danger" onClick={()=>setAlertVisibility(true)}>
          My Button
        </Button>
      </div>
    </div>
  );
}

export default App;