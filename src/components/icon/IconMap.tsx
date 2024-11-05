import React from "react";

export const iconMap = new Map<string, (size: number) => JSX.Element>([
    ['placeholder', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width={size} height={size} rx="3" stroke="#1A1A1A" strokeWidth="2"/>
        </svg>
    ],
    ['account circle', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_545_1148" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_545_1148)">
                <path d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="#1C1B1F" transform={`scale(${size / 24})`}/>
            </g>
        </svg>
    ],
    ['add', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_547_2263" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_547_2263)">
                <path d="M11 21V13H3V11H11V3H13V11H21V13H13V21H11Z" fill="#1C1B1F" transform={`scale(${size / 24})`}/>
            </g>
        </svg>
    ],
    ['add stop', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_555_3423" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_555_3423)">
                <path d="M12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2H12.5C12.6667 2 12.8333 2.01667 13 2.05V4.075C12.8333 4.04167 12.6708 4.02083 12.5125 4.0125C12.3542 4.00417 12.1833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2V10H20V10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM18 8H20V5H23V3H20V0H18V3H15V5H18V8Z" fill="#1C1B1F" transform={`scale(${size / 24})`}/>
            </g>
        </svg>
    ],
    ['alt routes', (size: number)=>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_545_1491" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_545_1491)">
                <path d="M11 22V17C11 16.0667 10.8583 15.375 10.575 14.925C10.2917 14.475 9.91667 14.0333 9.45 13.6L10.875 12.175C11.075 12.3583 11.2667 12.5542 11.45 12.7625C11.6333 12.9708 11.8167 13.1917 12 13.425C12.2333 13.1083 12.4708 12.8292 12.7125 12.5875C12.9542 12.3458 13.2 12.1083 13.45 11.875C14.0833 11.2917 14.6583 10.6167 15.175 9.85C15.6917 9.08333 15.9667 7.74167 16 5.825L14.425 7.4L13 6L17 2L21 6L19.6 7.4L18 5.825C17.9667 8.20833 17.6 9.90417 16.9 10.9125C16.2 11.9208 15.5 12.7417 14.8 13.375C14.2667 13.8583 13.8333 14.3292 13.5 14.7875C13.1667 15.2458 13 15.9833 13 17V22H11ZM6.2 8.175C6.13333 7.84167 6.0875 7.475 6.0625 7.075C6.0375 6.675 6.01667 6.25833 6 5.825L4.4 7.4L3 6L7 2L11 6L9.575 7.4L8 5.85C8 6.2 8.01667 6.52917 8.05 6.8375C8.08333 7.14583 8.11667 7.43333 8.15 7.7L6.2 8.175ZM8.35 12.575C8.01667 12.225 7.69583 11.8167 7.3875 11.35C7.07917 10.8833 6.80833 10.3083 6.575 9.625L8.5 9.15C8.66667 9.6 8.85833 9.98333 9.075 10.3C9.29167 10.6167 9.525 10.9 9.775 11.15L8.35 12.575Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['apartment', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_614_3803" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_614_3803)">
                <path d="M3 21V7H7V3H17V11H21V21H13V17H11V21H3ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM9 7H11V5H9V7ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM13 7H15V5H13V7ZM17 19H19V17H17V19ZM17 15H19V13H17V15Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['arrow back', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_555_4250" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_555_4250)">
                <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['bus alert', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_545_1157" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_545_1157)">
                <path d="M4 22C3.71667 22 3.47917 21.9042 3.2875 21.7125C3.09583 21.5208 3 21.2833 3 21V18.95C2.66667 18.6 2.41667 18.2125 2.25 17.7875C2.08333 17.3625 2 16.9333 2 16.5V7C2 5.51667 2.6875 4.47917 4.0625 3.8875C5.4375 3.29583 7.84167 3 11.275 3C11.0583 3.3 10.8708 3.61667 10.7125 3.95C10.5542 4.28333 10.4167 4.625 10.3 4.975C8.6 5.00833 7.2875 5.10833 6.3625 5.275C5.4375 5.44167 4.8 5.68333 4.45 6H10.075C10.025 6.33333 10 6.66667 10 7C10 7.33333 10.025 7.66667 10.075 8H4V11H11.275C11.5583 11.4 11.875 11.7708 12.225 12.1125C12.575 12.4542 12.9667 12.75 13.4 13H4V16C4 16.55 4.19583 17.0208 4.5875 17.4125C4.97917 17.8042 5.45 18 6 18H14C14.55 18 15.0208 17.8042 15.4125 17.4125C15.8042 17.0208 16 16.55 16 16V13.925C16.3333 13.975 16.6667 14 17 14C17.3333 14 17.6667 13.975 18 13.925V16.5C18 16.9333 17.9167 17.3625 17.75 17.7875C17.5833 18.2125 17.3333 18.6 17 18.95V21C17 21.2833 16.9042 21.5208 16.7125 21.7125C16.5208 21.9042 16.2833 22 16 22H15C14.7167 22 14.4792 21.9042 14.2875 21.7125C14.0958 21.5208 14 21.2833 14 21V20H6V21C6 21.2833 5.90417 21.5208 5.7125 21.7125C5.52083 21.9042 5.28333 22 5 22H4ZM17 12C15.6167 12 14.4375 11.5125 13.4625 10.5375C12.4875 9.5625 12 8.38333 12 7C12 5.63333 12.4833 4.45833 13.45 3.475C14.4167 2.49167 15.6 2 17 2C18.3833 2 19.5625 2.4875 20.5375 3.4625C21.5125 4.4375 22 5.61667 22 7C22 8.38333 21.5125 9.5625 20.5375 10.5375C19.5625 11.5125 18.3833 12 17 12ZM16.5 8H17.5V4H16.5V8ZM17 10C17.1333 10 17.25 9.95 17.35 9.85C17.45 9.75 17.5 9.63333 17.5 9.5C17.5 9.36667 17.45 9.25 17.35 9.15C17.25 9.05 17.1333 9 17 9C16.8667 9 16.75 9.05 16.65 9.15C16.55 9.25 16.5 9.36667 16.5 9.5C16.5 9.63333 16.55 9.75 16.65 9.85C16.75 9.95 16.8667 10 17 10ZM6.5 17C6.91667 17 7.27083 16.8542 7.5625 16.5625C7.85417 16.2708 8 15.9167 8 15.5C8 15.0833 7.85417 14.7292 7.5625 14.4375C7.27083 14.1458 6.91667 14 6.5 14C6.08333 14 5.72917 14.1458 5.4375 14.4375C5.14583 14.7292 5 15.0833 5 15.5C5 15.9167 5.14583 16.2708 5.4375 16.5625C5.72917 16.8542 6.08333 17 6.5 17ZM13.5 17C13.9167 17 14.2708 16.8542 14.5625 16.5625C14.8542 16.2708 15 15.9167 15 15.5C15 15.0833 14.8542 14.7292 14.5625 14.4375C14.2708 14.1458 13.9167 14 13.5 14C13.0833 14 12.7292 14.1458 12.4375 14.4375C12.1458 14.7292 12 15.0833 12 15.5C12 15.9167 12.1458 16.2708 12.4375 16.5625C12.7292 16.8542 13.0833 17 13.5 17Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['business center', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_614_3810" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_614_3810)">
                <path d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6H8V4C8 3.45 8.19583 2.97917 8.5875 2.5875C8.97917 2.19583 9.45 2 10 2H14C14.55 2 15.0208 2.19583 15.4125 2.5875C15.8042 2.97917 16 3.45 16 4V6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM10 6H14V4H10V6ZM20 15H15V17H9V15H4V19H20V15ZM11 15H13V13H11V15ZM4 13H9V11H15V13H20V8H4V13Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['360', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_545_1166" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_545_1166)">
                <path d="M9 20L7.6 18.6L9.35 16.8C7.21667 16.5167 5.45833 15.9333 4.075 15.05C2.69167 14.1667 2 13.15 2 12C2 10.6167 2.9625 9.4375 4.8875 8.4625C6.8125 7.4875 9.18333 7 12 7C14.8167 7 17.1875 7.4875 19.1125 8.4625C21.0375 9.4375 22 10.6167 22 12C22 13.0333 21.4458 13.9583 20.3375 14.775C19.2292 15.5917 17.7833 16.2 16 16.6V14.55C17.2833 14.2167 18.2708 13.8042 18.9625 13.3125C19.6542 12.8208 20 12.3833 20 12C20 11.4667 19.2875 10.8333 17.8625 10.1C16.4375 9.36667 14.4833 9 12 9C9.51667 9 7.5625 9.36667 6.1375 10.1C4.7125 10.8333 4 11.4667 4 12C4 12.4 4.425 12.8792 5.275 13.4375C6.125 13.9958 7.33333 14.4167 8.9 14.7L7.6 13.4L9 12L13 16L9 20Z" fill="#1C1B1F" transform={`scale(${size / 24})`}/>
            </g>
        </svg>
    ],
    ['calendar clock', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_545_1156" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_545_1156)">
                <path d="M5 8H19V6H5V8ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V11.675C20.6833 11.525 20.3583 11.4 20.025 11.3C19.6917 11.2 19.35 11.125 19 11.075V10H5V20H11.3C11.4167 20.3667 11.5542 20.7167 11.7125 21.05C11.8708 21.3833 12.0583 21.7 12.275 22H5ZM18 23C16.6167 23 15.4375 22.5125 14.4625 21.5375C13.4875 20.5625 13 19.3833 13 18C13 16.6167 13.4875 15.4375 14.4625 14.4625C15.4375 13.4875 16.6167 13 18 13C19.3833 13 20.5625 13.4875 21.5375 14.4625C22.5125 15.4375 23 16.6167 23 18C23 19.3833 22.5125 20.5625 21.5375 21.5375C20.5625 22.5125 19.3833 23 18 23ZM19.675 20.375L20.375 19.675L18.5 17.8V15H17.5V18.2L19.675 20.375Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['check', (size: number) =>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_548_660" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
                <rect width={size} height={size} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_548_660)">
                <path d="M9.54961 18L3.84961 12.3L5.27461 10.875L9.54961 15.15L18.7246 5.97498L20.1496 7.39998L9.54961 18Z" fill="#1C1B1F" transform={`scale(${size / 24})`} />
            </g>
        </svg>
    ],
    ['hopp', (size: number) =>
        <svg
            width={size}
            height={size}
            viewBox="0 0 239 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
            >
                <path d="M1571 1569 c-21 -8 -23 -13 -17 -52 14 -85 61 -163 161 -267 122 -126 132 -152 82 -207 -33 -37 -80 -30 -203 28 -128 60 -171 77 -239 90 -70 14 -1095 12 -1112 -3 -16 -13 -17 -60 -1 -76 9 -9 94 -12 321 -12 l309 0 -41 -46 c-23 -26 -41 -51 -41 -55 0 -5 -161 -9 -358 -9 -335 0 -360 -1 -375 -18 -22 -24 -21 -55 1 -75 17 -15 56 -17 356 -17 l338 0 -6 -22 c-3 -13 -6 -38 -6 -55 l0 -33 -258 0 c-276 0 -282 -1 -282 -50 0 -49 6 -50 291 -50 l267 0 30 -55 30 -55 -137 0 c-107 0 -141 -3 -159 -16 -27 -18 -29 -55 -4 -77 16 -15 48 -17 240 -17 125 0 232 -4 247 -10 15 -6 68 -19 117 -30 129 -28 167 -53 212 -140 21 -40 48 -76 60 -81 17 -8 52 -3 147 21 164 41 237 46 375 23 124 -21 165 -16 190 22 14 21 14 26 0 53 -17 33 -70 62 -127 69 -48 7 -312 -14 -404 -32 -38 -7 -72 -11 -75 -8 -3 3 -5 82 -5 176 0 167 -1 174 -27 228 -30 60 -96 131 -149 161 l-34 19 40 -6 c85 -13 162 -79 208 -178 35 -72 46 -127 47 -215 l0 -72 63 31 c114 57 182 114 245 202 73 103 96 116 240 126 122 9 163 25 182 70 14 34 10 57 -26 153 -33 86 -82 132 -230 213 -124 68 -181 116 -231 195 -79 124 -178 187 -252 159z"/>
                <path d="M1402 1400 c-56 -53 1 -150 118 -204 65 -29 235 -79 251 -74 13 4 -205 242 -253 276 -40 28 -87 28 -116 2z"/>
                <path d="M1205 239 c-26 -17 -41 -18 -116 -13 -79 6 -88 5 -108 -15 -24 -24 -27 -68 -7 -97 13 -17 27 -19 118 -19 105 1 137 9 194 54 20 16 21 19 7 47 -17 33 -43 64 -52 63 -3 0 -19 -9 -36 -20z"/>
            </g>
        </svg>
    ],
]);