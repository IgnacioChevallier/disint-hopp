import './App.css';
import {Button} from "./components/button/Button";
import {ListItem} from "./components/list-item/ListItem";
import {TextInput} from "./components/text-input/TextInput";

function App() {
    return (
        <div className="App">
            <Button text={"Click me"}/>
            <div style={{width: '20%', gap: 5, display: 'flex', flexDirection: 'column'}}>
                <ListItem text={"Boca"} controlType={"radio"}/>
                <ListItem text={"Juniors"} controlType={"toggle"}/>
                <ListItem text={"Juega"} controlType={"checkbox"}/>
            </div>
            <TextInput placeholder={"Enter your name"}/>
        </div>
    );
}

export default App;
