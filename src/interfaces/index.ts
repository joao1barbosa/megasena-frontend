import { ReactNode } from "react"

export interface SvgProps{
    color: string
}

export interface NumberProps{
    children: ReactNode
}

export interface ContestInfo{
    numbers: number[];
    contest: number;
    date: string;
}