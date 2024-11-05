import React from 'react';

const Notifications: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px', maxWidth: '400px', margin: 'auto' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button style={{ fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer' }}>←</button>
                <h1 style={{ margin: 0 }}>Alerts</h1>
            </header>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '16px',
                        border: '1px solid #ccc',
                        outline: 'none'
                    }}
                    disabled
                />
                <button style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'default' }}>🔍</button>
            </div>
            <div style={{ position: 'relative', marginTop: '8px' }}>
                <button style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '16px', color: '#007bff', background: 'none', cursor: 'default' }}>
                    Button ⌄
                </button>
                <div style={{
                    position: 'absolute', top: '100%', right: 0, background: 'white', border: '1px solid #ccc',
                    borderRadius: '8px', padding: '8px', marginTop: '4px', display: 'flex', flexDirection: 'column'
                }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" checked disabled style={{ marginRight: '8px' }} />
                        All
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" checked disabled style={{ marginRight: '8px' }} />
                        Favorites
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" checked disabled style={{ marginRight: '8px' }} />
                        Ongoing
                    </label>
                </div>
            </div>
            <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderRadius: '8px', backgroundColor: '#f0f0f0', marginTop: '8px', color: '#333', width: '370px', height: '99px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', width: '259px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>🚌</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <p style={{ margin: 0 }}>Lines 123, 434, 843, 943 are currently affected by storms.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <p style={{ fontWeight: 'bold', margin: 0 }}>6:24 am</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderRadius: '8px', backgroundColor: '#f0f0f0', marginTop: '8px', color: '#333', width: '370px', height: '99px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', width: '259px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>🚌</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <p style={{ margin: 0 }}>High passenger volume on Line 843 due to local events.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <p style={{ fontWeight: 'bold', margin: 0 }}>6:24 am</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderRadius: '8px', backgroundColor: '#e0e0e0', marginTop: '8px', color: '#333', width: '370px', height: '99px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', width: '259px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>📅</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <p style={{ margin: 0 }}>Line 123 will be temporarily unavailable from 10 pm to 5 am.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <p style={{ fontWeight: 'bold', margin: 0 }}>6:24 am</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderRadius: '8px', backgroundColor: '#e0e0e0', marginTop: '8px', color: '#333', width: '370px', height: '99px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', width: '259px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>📅</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <p style={{ margin: 0 }}>Unexpected incident on Line 123. Delays expected.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <p style={{ fontWeight: 'bold', margin: 0 }}>6:24 am</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;