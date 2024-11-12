import React, {useEffect, useRef, useState} from 'react';
import { iconMap } from '../icon/IconMap';
import Icon, {IconProps} from "../icon/Icon";

interface SearchbarProps {
    placeholder: string;
    leadingIcon?: IconProps["name"];
    trailingIcon?: IconProps["name"];
    options: string[];
    searchBarZIndex?: number;
    dropdownZIndex?: number;
    value?: string;
    onChange?: (value: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ placeholder, leadingIcon, trailingIcon, options, searchBarZIndex, dropdownZIndex, value, onChange }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchText, setSearchText] = useState(value || '');
    const searchbarRef = useRef<HTMLDivElement>(null);

    const handleInputClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSearchText(option);
        setDropdownOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        onChange && onChange(e.target.value);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchbarRef.current && !searchbarRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchbarRef} style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', position: 'relative' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '48px',
                    width: '100%',
                    padding: '0px 16px',
                    border: '1px solid #000',
                    borderRadius: '24px',
                    backgroundColor: '#FFF',
                    gap: '8px',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    zIndex: searchBarZIndex ?? 100
                }}
                onClick={handleInputClick}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {leadingIcon && (<Icon name={leadingIcon} size={"small"}/>)}
                </div>

                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchText}
                    onChange={handleInputChange}
                    style={{
                        flex: 1,
                        border: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent',
                        textAlign: 'left'
                    }}
                />

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {trailingIcon && (<Icon name={trailingIcon} size={"small"}/>)}
                </div>
            </div>

            {isDropdownOpen && (options.length != 0) && (
                <div
                    style={{
                        marginTop: '-24px',
                        width: '100%',
                        padding: '8px 16px',
                        border: '1px solid #000',
                        borderBottomLeftRadius: '24px',
                        borderBottomRightRadius: '24px',
                        backgroundColor: '#f5f5f5',
                        boxSizing: 'border-box',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        zIndex: dropdownZIndex ?? 75,
                        maxHeight: '200px',
                        overflowY: 'auto',
                        position: 'absolute',
                        top: '100%',
                        paddingTop: '24px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <style>
                        {`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>

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
