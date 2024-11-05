import React from 'react';
import { Alert } from "../components/alert/Alert";
import { Button } from "../components/button/Button";

const Notifications = () => {
    return (
        <div style={{ padding: '16px', backgroundColor: '#ffffff', color: 'black', minHeight: '100vh' }}>
            <header style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>⬅️</button>
                <h1 style={{ flex: 1, textAlign: 'center', margin: 0 }}>Alerts</h1>
            </header>

            {/* Search bar hardcoded */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', marginBottom: '16px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '16px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        backgroundColor: '#f5f5f5' // color de fondo para el input
                    }}
                    disabled
                />
                <button style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'default' }}>🔍</button>
            </div>

            {/* Button dropdown */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                <Button>Button</Button>
            </div>

            {/* List of Alerts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Alert
                    active={true}
                    link={false}
                    href=""
                    text="Lines 123, 434, 843, 947 currently affected by service issues."
                    time="6:24 am"
                    icon="bus-alert"
                />
                <Alert
                    active={true}
                    link={false}
                    href=""
                    text="High passenger volume on Line 843 due to local events."
                    time="6:24 am"
                    icon="bus-alert"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Line 123 will be temporarily unavailable from 10 pm to 5 am."
                    time="6:24 am"
                    icon="calendar-clock"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Unexpected incident on Line 123. Delays expected."
                    time="6:24 am"
                    icon="calendar-clock"
                />
            </div>
        </div>
    );
};

export default Notifications;