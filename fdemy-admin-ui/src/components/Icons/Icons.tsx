type IconProps = {
    className?: string;
    width?: string;
    height?: string;
};

export const DashboardIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8.75 13C9.99264 13 11 14.0074 11 15.25V18.75C11 19.9926 9.99264 21 8.75 21H5.25C4.00736 21 3 19.9926 3 18.75V15.25C3 14.0074 4.00736 13 5.25 13H8.75ZM18.75 13C19.9926 13 21 14.0074 21 15.25V18.75C21 19.9926 19.9926 21 18.75 21H15.25C14.0074 21 13 19.9926 13 18.75V15.25C13 14.0074 14.0074 13 15.25 13H18.75ZM8.75 14.5H5.25C4.83579 14.5 4.5 14.8358 4.5 15.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H8.75C9.16421 19.5 9.5 19.1642 9.5 18.75V15.25C9.5 14.8358 9.16421 14.5 8.75 14.5ZM18.75 14.5H15.25C14.8358 14.5 14.5 14.8358 14.5 15.25V18.75C14.5 19.1642 14.8358 19.5 15.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V15.25C19.5 14.8358 19.1642 14.5 18.75 14.5ZM8.75 3C9.99264 3 11 4.00736 11 5.25V8.75C11 9.99264 9.99264 11 8.75 11H5.25C4.00736 11 3 9.99264 3 8.75V5.25C3 4.00736 4.00736 3 5.25 3H8.75ZM18.75 3C19.9926 3 21 4.00736 21 5.25V8.75C21 9.99264 19.9926 11 18.75 11H15.25C14.0074 11 13 9.99264 13 8.75V5.25C13 4.00736 14.0074 3 15.25 3H18.75ZM8.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V8.75C4.5 9.16421 4.83579 9.5 5.25 9.5H8.75C9.16421 9.5 9.5 9.16421 9.5 8.75V5.25C9.5 4.83579 9.16421 4.5 8.75 4.5ZM18.75 4.5H15.25C14.8358 4.5 14.5 4.83579 14.5 5.25V8.75C14.5 9.16421 14.8358 9.5 15.25 9.5H18.75C19.1642 9.5 19.5 9.16421 19.5 8.75V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5Z" />
        </svg>
    );
};

export const UserIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <style
                    dangerouslySetInnerHTML={{
                        __html: '.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}',
                    }}
                />
            </defs>
            <title />
            <g data-name="78-user" id="_78-user">
                <circle className="cls-1" cx={16} cy={8} r={7} />
                <path className="cls-1" d="M28,31A12,12,0,0,0,4,31Z" />
            </g>
        </svg>
    );
};

export const CategoryIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
            enableBackground="new 0 0 40 40"
            xmlSpace="preserve"
        >
            <g>
                <path
                    d="M20,21.569c-0.095,0-0.189-0.021-0.282-0.062L5.434,15.115C5.165,14.995,4.994,14.72,5,14.413
c0.006-0.303,0.191-0.578,0.46-0.683l14.286-5.681C19.828,8.017,19.913,8,20,8c0.086,0,0.172,0.017,0.254,0.049l14.285,5.679
c0.275,0.11,0.455,0.378,0.461,0.683c0.008,0.308-0.163,0.584-0.434,0.704L20.281,21.51C20.192,21.549,20.096,21.569,20,21.569
L20,21.569z M7.626,14.468l12.339,5.522l12.409-5.522L20,9.549L7.626,14.468z"
                />
                <path
                    d="M5.434,20.49c-0.361-0.163-0.53-0.604-0.376-0.983c0.113-0.275,0.372-0.454,0.659-0.454c0.097,0,0.191,0.021,0.282,0.062
l13.967,6.249l14.037-6.249c0.092-0.042,0.186-0.062,0.283-0.062c0.286,0,0.544,0.177,0.656,0.454
c0.155,0.379-0.014,0.82-0.376,0.983L20,27.008L5.434,20.49z"
                />
                <path
                    d="M5.434,25.48c-0.362-0.164-0.531-0.604-0.376-0.981c0.113-0.275,0.372-0.454,0.659-0.454c0.097,0,0.191,0.021,0.282,0.061
l13.967,6.25l14.037-6.25c0.09-0.039,0.186-0.061,0.283-0.061c0.286,0,0.544,0.179,0.656,0.454
c0.155,0.378-0.014,0.819-0.375,0.981L20,32L5.434,25.48z"
                />
            </g>
        </svg>
    );
};

export const LessonIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            // style={{ enableBackground: 'new 0 0 50 50' }}
            version="1.1"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Layer_1">
                <path d="M26,3V1h-2v2H3H1v2h2v26H1v2h2h17.471L14,47.791V49h2v-0.791L22.654,33H24v16h2V33h1.346L34,48.209V49h2v-1.209L29.529,33   H47h2v-2h-2V5h2V3h-2H26z M45,31H5V5h40V31z" />
                <path d="M16,28c4.411,0,8-3.589,8-8v-1h-7v-7h-1c-4.411,0-8,3.589-8,8S11.589,28,16,28z M15,14.083V21h6.917   c-0.478,2.834-2.949,5-5.917,5c-3.309,0-6-2.691-6-6C10,17.032,12.166,14.561,15,14.083z" />
                <path d="M28,16c0-4.411-3.589-8-8-8h-1v9h9V16z M21,15v-4.917c2.509,0.422,4.494,2.408,4.917,4.917H21z" />
                <rect height={2} width={10} x={31} y={10} />
                <rect height={2} width={10} x={31} y={15} />
                <rect height={2} width={10} x={31} y={20} />
            </g>
            <g />
        </svg>
    );
};

export const RegisterIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
    );
};

export const InvoiceIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8,13h8V11H8ZM8,9h8V7H8Zm5,8h3V15H13ZM19.11,2a3.06,3.06,0,0,0-1.75.57,1,1,0,0,1-1.25,0,3,3,0,0,0-3.5,0A1.14,1.14,0,0,1,12,2.8a1.06,1.06,0,0,1-.6-.22A3,3,0,0,0,9.64,2a3,3,0,0,0-1.75.57,1,1,0,0,1-1.25,0A3.06,3.06,0,0,0,4.89,2H4V22h.89a3.06,3.06,0,0,0,1.75-.57,1,1,0,0,1,1.25,0,3,3,0,0,0,3.5,0A1.14,1.14,0,0,1,12,21.2a1.06,1.06,0,0,1,.6.22,3,3,0,0,0,1.74.58,3,3,0,0,0,1.75-.57,1,1,0,0,1,1.25,0,3.06,3.06,0,0,0,1.75.57H20V2ZM18,19.5a3,3,0,0,0-3,.28,1.09,1.09,0,0,1-.62.22,1,1,0,0,1-.6-.22A3,3,0,0,0,12,19.2a3.11,3.11,0,0,0-1.76.58,1,1,0,0,1-1.24,0,3,3,0,0,0-3-.28V4.5a3,3,0,0,0,1.26.3A3.11,3.11,0,0,0,9,4.22,1.09,1.09,0,0,1,9.64,4a1,1,0,0,1,.6.22A3,3,0,0,0,12,4.8a3.11,3.11,0,0,0,1.76-.58,1,1,0,0,1,1.24,0,3.11,3.11,0,0,0,1.76.58A3,3,0,0,0,18,4.5Z" />
        </svg>
    );
};

export const SettingIcon = ({ className, width = '2.6rem', height = '2.6rem' }: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            enableBackground="new 0 0 32 32"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <circle
                cx={16}
                cy={16}
                fill="none"
                id="XMLID_224_"
                r={4}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
            <path
                d="  M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2  c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732  c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732  l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2  c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732  c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z  "
                fill="none"
                id="XMLID_242_"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
        </svg>
    );
};

export const LanguageIcon = ({ className, width = '2rem', height = '2rem' }: IconProps) => {
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

export const InboxIcon = ({ className, width = '3.2rem', height = '3.2rem' }: IconProps) => {
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
