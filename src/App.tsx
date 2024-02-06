import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import {useState} from "react";

function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  return <div>
    {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>Alert</Alert>}
    <Button onClick={()=>setAlertVisibility(true)}> Hey there</Button>
    </div>
}
export default App;