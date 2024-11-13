export const InboxIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
            />
        </svg>
    );
};
export const InboxActiveIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4977 9C10.1195 9 9.0013 10.1153 8.99767 11.4934L8.94239 32.4934C8.93875 33.8767 10.0591 35 11.4424 35H18.7895L22.0656 39.004C23.0659 40.2265 24.9352 40.2264 25.9354 39.0039L29.2111 35H36.5587C37.942 35 39.0623 33.8767 39.0587 32.4934L39.0029 11.4934C38.9993 10.1152 37.8811 9 36.5029 9H11.4977ZM29 21H19C18.4477 21 18 21.4477 18 22V23C18 23.5523 18.4477 24 19 24H29C29.5523 24 30 23.5523 30 23V22C30 21.4477 29.5523 21 29 21Z"
            />
        </svg>
    );
};

export const ArrowIcon = ({ className, style, width = '0.8rem', height = '0.8rem' }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
        >
            <use xlinkHref="#tip_arrow_white-99f4b53c" />
        </svg>
    );
};

// Menu Icons
export const UserIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
            />
        </svg>
    );
};
export const BookMarkIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 11C9 8.23858 11.2386 6 14 6H34C36.7614 6 39 8.23858 39 11V40C39 40.7439 38.5871 41.4263 37.9282 41.7716C37.2693 42.1168 36.4732 42.0678 35.8616 41.6444L24 33.4325L12.1384 41.6444C11.5268 42.0678 10.7307 42.1168 10.0718 41.7716C9.41286 41.4263 9 40.7439 9 40V11ZM14 10C13.4477 10 13 10.4477 13 11V36.1829L22.8616 29.3556C23.5465 28.8815 24.4535 28.8815 25.1384 29.3556L35 36.1829V11C35 10.4477 34.5523 10 34 10H14Z"
            />
        </svg>
    );
};
export const SettingIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.375 44.2391C21.375 44.6593 21.7157 45 22.1359 45H25.8641C26.2843 45 26.625 44.6593 26.625 44.2391V41.3044C29.4979 40.8723 32.1421 39.7417 34.3792 38.0912L36.4554 40.1674C36.7525 40.4646 37.2343 40.4646 37.5314 40.1674L40.1677 37.5311C40.4648 37.234 40.4648 36.7522 40.1677 36.4551L38.0915 34.3789C39.7419 32.1418 40.8723 29.4978 41.3044 26.625H44.2391C44.6593 26.625 45 26.2843 45 25.8641V22.1359C45 21.7157 44.6593 21.375 44.2391 21.375H41.3044C40.8723 18.5021 39.7418 15.858 38.0913 13.6209L40.1673 11.5449C40.4644 11.2478 40.4644 10.766 40.1673 10.4689L37.531 7.83262C37.2339 7.53548 36.7521 7.53548 36.455 7.83262L34.379 9.90863C32.1419 8.25818 29.4978 7.1277 26.625 6.69556V3.76087C26.625 3.34065 26.2843 3 25.8641 3H22.1359C21.7156 3 21.375 3.34065 21.375 3.76087V6.69556C18.5022 7.1277 15.8582 8.25815 13.6211 9.90854L11.5452 7.83265C11.2481 7.53551 10.7664 7.53551 10.4692 7.83265L7.83294 10.4689C7.5358 10.7661 7.5358 11.2478 7.83294 11.545L9.90878 13.6208C8.25826 15.8579 7.12772 18.5021 6.69556 21.375H3.76087C3.34065 21.375 3 21.7157 3 22.1359V25.8641C3 26.2843 3.34065 26.625 3.76087 26.625H6.69556C7.1277 29.4978 8.25819 32.1419 9.90863 34.379L7.83255 36.4551C7.53541 36.7522 7.53541 37.234 7.83255 37.5311L10.4688 40.1674C10.766 40.4645 11.2477 40.4645 11.5449 40.1674L13.6209 38.0913C15.858 39.7418 18.5021 40.8723 21.375 41.3044V44.2391ZM24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
            />
        </svg>
    );
};
export const LanguageIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
            />
        </svg>
    );
};
export const FeedBackIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
            />
        </svg>
    );
};
export const KeyBoardIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
            />
        </svg>
    );
};
export const DarkModeIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.3019 6.38068C21.723 6.08373 22.9615 7.16986 23.009 8.50693C23.2751 16.0034 29.4377 22 37 22C37.8141 22 38.6105 21.9307 39.3839 21.7982C40.7019 21.5723 42 22.5655 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 15.3248 12.1351 8.0871 20.3019 6.38068ZM19.2223 10.8358C13.8426 12.7885 10 17.9473 10 24C10 31.732 16.268 38 24 38C31.06 38 36.8994 32.7742 37.8611 25.9797C37.5756 25.9932 37.2886 26 37 26C28.0237 26 20.5827 19.4301 19.2223 10.8358Z"
            />
        </svg>
    );
};
export const LogoutIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.1716 26L7 26C6.44771 26 6 25.5523 6 25L6 23C6 22.4477 6.44771 22 7 22L24.1716 22L20.2929 18.1213C19.9024 17.7308 19.9024 17.0976 20.2929 16.7071L21.7071 15.2929C22.0976 14.9024 22.7308 14.9024 23.1213 15.2929L30.4142 22.5858C31.1953 23.3668 31.1953 24.6332 30.4142 25.4142L23.1213 32.7071C22.7308 33.0976 22.0976 33.0976 21.7071 32.7071L20.2929 31.2929C19.9024 30.9024 19.9024 30.2692 20.2929 29.8787L24.1716 26ZM36 43L27 43C26.4477 43 26 42.5523 26 42L26 40C26 39.4477 26.4477 39 27 39L36 39C37.1046 39 38 38.1046 38 37L38 11C38 9.89543 37.1046 9 36 9L27 9C26.4477 9 26 8.55228 26 8L26 6C26 5.44771 26.4477 5 27 5L36 5C39.3137 5 42 7.68629 42 11L42 37C42 40.3137 39.3137 43 36 43Z"
            />
        </svg>
    );
};

// Sidebar Icons
export const HomeIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => {
    return (
        <svg
            aria-label="Home"
            width={width}
            height={height}
            className={className}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
            />
        </svg>
    );
};
export const HomeActiveIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => {
    return (
        <svg
            aria-label="Home"
            width={width}
            height={height}
            className={className}
            fill="currentColor"
            data-e2e
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
            />
        </svg>
    );
};

export const RoadMapIcon = ({ className, width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg
            aria-label="Explore"
            width={width}
            height={height}
            className={className}
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
        >
            <title>Explore</title>
            <polygon
                fill="none"
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056" />
            <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
};
export const RoadMapActiveIcon = ({ className, width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg
            aria-label="Explore"
            width={width}
            height={height}
            className={className}
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
        >
            <path d="m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z" />
        </svg>
    );
};

export const BlogIcon = ({ className, width = '2.6rem', height = '2.6rem' }) => {
    return (
        <svg
            aria-label="Blog"
            width={width}
            height={height}
            className={className}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <g>
                <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z" />
            </g>
        </svg>
    );
};
export const BlogActiveIcon = ({ className, width = '2.6rem', height = '2.6rem' }) => {
    return (
        <svg
            aria-label="Blog"
            width={width}
            height={height}
            className={className}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <g>
                <path d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z" />
            </g>
        </svg>
    );
};

export const MessageIcon = ({ className, width = '2.6rem', height = '2.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
            />
        </svg>
    );
};
export const MessageActiveIcon = ({ className, width = '2.6rem', height = '2.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.7321 7.00001C45.3748 6.3812 44.7146 6 44 6H4.00004C3.20826 6 2.49103 6.4671 2.17085 7.19125C1.85068 7.9154 1.98785 8.76026 2.52068 9.34592L12.9607 20.8209C13.5137 21.4288 14.3824 21.6365 15.1506 21.3445L29.65 15.8336C29.8188 15.7694 29.8953 15.796 29.9287 15.8092C29.9872 15.8325 30.0709 15.8928 30.1366 16.0041C30.2023 16.1154 30.2147 16.2179 30.2068 16.2802C30.2023 16.3159 30.1885 16.3958 30.0509 16.5125L18.1464 26.6098C17.5329 27.1301 17.2908 27.9674 17.5321 28.7348L22.0921 43.2398C22.33 43.9967 22.9928 44.5413 23.7815 44.628C24.5701 44.7147 25.3354 44.3271 25.7321 43.64L45.7321 9.00002C46.0894 8.38122 46.0894 7.61882 45.7321 7.00001Z"
            />
        </svg>
    );
};

// action icon
export const LikeIcon = ({ className, width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg
            aria-label="Like"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
        >
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z" />
        </svg>
    );
};

export const Unlike = ({ className, width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg
            aria-label="Unlike"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            role="img"
            viewBox="0 0 48 48"
        >
            <title>Unlike</title>
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};

export const CommentIcon = ({ className, width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg
            aria-label="Comment"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
        >
            <title>Comment</title>
            <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
};

export const ShareIcon = ({ className, width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg
            aria-label="Share Post"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
        >
            <title>Share Post</title>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={2}
                x1={22}
                x2="9.218"
                y1={3}
                y2="10.083"
            />
            <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
};

/*
  className={className}
    width={width}
    height={height}
    ({ className, width = '2.6rem', height = '2.6rem' }) => {
*/
