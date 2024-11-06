import React from 'react';
import { Alert } from "../components/alert/Alert";
import { Button } from "../components/button/Button";
import { Searchbar } from '../components/searchbar/Searchbar';
import { iconMap } from "../components/icon/IconMap";

const Notifications = () => {
    // Obtener el icono de flecha hacia atrás
    const BackIcon = iconMap.get('arrow back');

    // Opciones de búsqueda para la Searchbar
    const alerts = [
        "Lines 123, 434, 843, 947 currently affected by service issues.",
        "High passenger volume on Line 843 due to local events.",
        "Line 123 will be temporarily unavailable from 10 pm to 5 am.",
        "Unexpected incident on Line 123. Delays expected."
    ];

    return (
        <div style={{ padding: '16px', backgroundColor: '#ffffff', color: 'black', minHeight: '100vh' }}>
            <header style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                    {BackIcon && BackIcon(24, "black")} {/* Renderiza el icono si existe */}
                </button>
                <h1 style={{ flex: 1, textAlign: 'center', margin: 0 }}>Alerts</h1>
            </header>

            {/* Searchbar */}
            <div style={{ marginBottom: '16px', width: '100%' }}>
                <Searchbar
                    placeholder="Search..."
                    left_icon=""
                    right_icon="search"
                    options={alerts} // Lista de alertas como opciones del dropdown
                />
            </div>

            {/* Button dropdown */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                <Button>Button</Button>
            </div>

            {/* List of Alerts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '-webkit-fill-available' }}>
                <Alert
                    active={true}
                    link={false}
                    href=""
                    text="Lines 123, 434, 843, 947 currently affected by service issues."
                    time="6:24 am"
                    icon="bus alert"
                />
                <Alert
                    active={true}
                    link={false}
                    href=""
                    text="High passenger volume on Line 843 due to local events."
                    time="6:24 am"
                    icon="bus alert"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Line 123 will be temporarily unavailable from 10 pm to 5 am."
                    time="6:24 am"
                    icon="calendar clock"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Unexpected incident on Line 123. Delays expected."
                    time="6:24 am"
                    icon="calendar clock"
                />
            </div>
        </div>
    );
};

export default Notifications;