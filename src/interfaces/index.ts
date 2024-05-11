import { ReactNode } from "react"

export interface SvgProps{
    color: string
}

export interface NumberProps{
    children: ReactNode
}

export interface ContestInfo{
    name: string;
    numbers: number[];
    contest: number;
    date: string;
}