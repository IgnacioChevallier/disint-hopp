import React, { useState } from 'react';

const AlertsScreen: React.FC = () => {
    const [filters, setFilters] = useState({
        all: false,
        favorites: true,
        ongoing: true,
    });

    const handleFilterChange = (filter: string, value: boolean) => {
        setFilters((prev) => ({ ...prev, [filter]: value }));
    };

    return (
        <div className="alerts-screen">
            <header>
                <button className="back-button">←</button>
                <h1>Alerts</h1>
            </header>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button className="search-button">🔍</button>
            </div>

        </div>
    );
};

export default AlertsScreen;