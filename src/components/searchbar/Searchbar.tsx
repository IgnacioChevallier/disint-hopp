import React, { useState } from 'react';
import { iconMap } from '../icon/IconMap';

interface SearchbarProps {
    placeholder: string;
    left_icon: string; // Nombre del ícono en IconMap para el lado izquierdo
    right_icon: string; // Nombre del ícono en IconMap para el lado derecho
    options: string[]; // Opciones para mostrar en el dropdown
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder, left_icon, right_icon, options }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    // Obtener los íconos desde iconMap usando los nombres pasados como props
    const LeftIcon = iconMap.get(left_icon);
    const RightIcon = iconMap.get(right_icon);

    const handleInputClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSearchText(option);
        setDropdownOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#f5f5f5'
                }}
                onClick={handleInputClick}
            >
                {/* Renderizar el ícono de la izquierda */}
                <div style={{ marginRight: '8px' }}>
                    {LeftIcon && LeftIcon(20)}
                </div>

                {/* Campo de texto de búsqueda */}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{
                        flex: 1,
                        border: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent'
                    }}
                />

                {/* Renderizar el ícono de la derecha */}
                <div style={{ marginLeft: '8px' }}>
                    {RightIcon && RightIcon(20)}
                </div>
            </div>

            {isDropdownOpen && (
                <div
                    style={{
                        marginTop: '4px',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        zIndex: 100,
                        maxHeight: '150px',
                        overflowY: 'auto'
                    }}
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                padding: '8px 0',
                                cursor: 'pointer',
                                borderBottom: index < options.length - 1 ? '1px solid #eaeaea' : 'none'
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Searchbar;