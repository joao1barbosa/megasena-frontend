import { SvgProps } from "../../interfaces";

export function Sidebar({ color }: SvgProps){
    return (
        <svg 
        viewBox="0 0 613 1080" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
            <g className="sidebar">
                <path d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={color}/>
            </g>
        </svg>
    );
}