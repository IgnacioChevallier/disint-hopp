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
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '48px',
                    width: '346px',
                    padding: '0px 16px',
                    border: '1px solid #000',
                    borderRadius: '24px',
                    backgroundColor: '#FFF',
                    gap: '8px',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    zIndex: '150'
                }}
                onClick={handleInputClick}
            >
                {/* Renderizar el ícono de la izquierda */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                        backgroundColor: 'transparent',
                        textAlign: 'left'
                    }}
                />

                {/* Renderizar el ícono de la derecha */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {RightIcon && RightIcon(20)}
                </div>
            </div>

            {isDropdownOpen && (
                <div
                    style={{
                        marginTop: '4px',
                        width: '346px',
                        padding: '8px 16px',
                        border: '1px solid #000',
                        borderBottomLeftRadius: '24px',
                        borderBottomRightRadius: '24px',
                        backgroundColor: '#f5f5f5',
                        boxSizing: 'border-box',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        zIndex: 100,
                        maxHeight: '150px',
                        overflowY: 'auto',
                        position: 'absolute',
                        top:'24px'
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