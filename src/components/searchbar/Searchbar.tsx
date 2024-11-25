import React, {useEffect, useRef, useState} from 'react';
import Icon, {IconProps} from "../icon/Icon";
import {Overlay} from "../overlay/Overlay";
import {OverlayRowProps} from "../overlay-row/OverlayRow";

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
    const overlayRef = useRef<HTMLDivElement>(null);
    const [overlayPosition, setOverlayPosition] = useState<{ top: number, left: number, width: number }>({ top: 0, left: 0, width: 0 });

    const handleInputClick = () => {
        setDropdownOpen(!isDropdownOpen);
        if (searchbarRef.current) {
            const rect = searchbarRef.current.getBoundingClientRect();
            setOverlayPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX, width: rect.width });
        }
    };

    const handleOptionClick = (option: string, event: React.MouseEvent<HTMLDivElement>) => {
        setSearchText(option);
        setDropdownOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        onChange && onChange(e.target.value);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchbarRef.current && !searchbarRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest("[data-inside-overlay='true']")) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchbarRef} className={"flex flex-col w-full items-center relative"}>
            <div
                className={"flex items-center justify-center min-h-[48px] w-full px-[16px] py-0 z-10 box-border cursor-pointer rounded-[8px] bg-white gap-[8px]"}
                onClick={handleInputClick}
            >
                <div className={"flex items-center"}>
                    {leadingIcon && (<Icon name={leadingIcon} size={"small"}/>)}
                </div>

                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchText}
                    onChange={handleInputChange}
                    className={"flex-1 border-none outline-none bg-transparent text-gray-800 text-left"}
                />

                <div className={"flex items-center"}>
                    {trailingIcon && (<Icon name={trailingIcon} size={"small"}/>)}
                </div>
            </div>

            {isDropdownOpen && (options.length !== 0) && (
                <div ref={overlayRef}>
                    <Overlay
                        data-inside-overlay="true"
                        rows={options.map((option: string): OverlayRowProps => ({
                                onClick: (event) => handleOptionClick(option, event),
                                label: option,
                                style: {cursor: "pointer"},
                            })
                        )}
                        style={{
                            position: 'absolute',
                            width: overlayPosition.width,
                            top: overlayPosition.top + 2,
                            left: overlayPosition.left + 2,
                            zIndex: dropdownZIndex ?? 100,
                            maxHeight: "200px",
                            overflowY: "auto",
                            scrollbarWidth: "none"
                        }}
                    />
                </div>
            )}
        </div>
    );
};