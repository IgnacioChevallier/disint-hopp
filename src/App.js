import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Notifications from "./screens/Notifications";
import {ListItem} from "./components/list-item/ListItem";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/notifications" replace/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
            </Routes>
        </Router>
        // <div className="flex justify-center items-center flex-col w-1/5 gap-1">
        //     <ListItem text={"Boca"} controlType={"radio"}/>
        //     <ListItem text={"Juniors"} controlType={"toggle"}/>
        //     <ListItem text={"Juega"} controlType={"checkbox"}/>
        // </div>
    );
}

export default App;
