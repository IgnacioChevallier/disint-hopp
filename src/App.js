import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Notifications from "./screens/Notifications";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/notifications" replace />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </Router>
    );
}

export default App;