import './App.css';
import {Button} from "./components/button/Button";
import {ListItem} from "./components/list-item/ListItem";

function App() {
    return (
        <div className="App">
            <Button text={"Click me"}/>
            <ListItem text={"Boca"}/>
        </div>
    );
}

export default App;
