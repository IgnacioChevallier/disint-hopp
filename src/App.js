import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Notifications from "./screens/Notifications";
import RouteList from "./screens/RouteList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/notifications" replace/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path={"/route-list"} element={<RouteList/>}/>
            </Routes>
        </Router>
    );
}

export default App;
