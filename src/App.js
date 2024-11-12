import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Notifications from "./screens/Notifications";
import RouteList from "./screens/RouteList";
import HomePage from "./screens/Presentation";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/presentation" replace/>}/>
                <Route path={"/presentation"} element={<HomePage/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path={"/route-list"} element={<RouteList/>}/>
            </Routes>
        </Router>
    );
}

export default App;
