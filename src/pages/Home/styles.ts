import { styled } from "styled-components";
import { Color } from "../../interfaces";

export const MainScreen = styled.div`    
    height: 100vh;
    width: 100vw;
    display: flex; 
    flex-direction: row;

    @media (max-width: 1024px){
        flex-direction: column;
    }
`;

export const InfoPart = styled.section<Color>`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ bgColor }) => `${bgColor}`};
    transition: background-color 0.5s;
    color: #ffffff;

    @media (max-width: 1024px){
        min-height: 30%;
        max-height: 35%;
    }
`;

export const Select = styled.select`
    align-self: flex-start;
    background-color: #ffffff;
    height: 45px;
    width: 215px;
    margin-top: 30px;
    padding: 10px 10px 10px;
    margin-left: 10%;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    outline: none;

    justify-content: center;
    align-items: center;

    @media (max-width: 1024px){
        align-self: center;
        margin-left: 0px;
    }

    option{
        border: none;
        outline: none;
    }
`;

export const ContestName = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: flex-end;
    font-size: 40px;
    font-weight: bold;

    img{
        margin-right: 25px;
    }
`;

export const Infos = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    margin-bottom: 70px;
    font-size: 16px;
    font-weight: bold;

    margin-left: 240px;

    @media (max-width: 1024px){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 0px;
        margin-bottom: 0px;
        font-size: 16px;
    }

    div{
        display: flex;
        flex-direction: row;

        p{
            @media (max-width: 1024px){
                display: none;
            }
        }
    }

    h3{
        font-size: 13px;
        margin-bottom: 10px;

        @media (max-width: 1024px){
            margin-bottom: 0px;
        }
    }
`;

export const NumberPart = styled.section`
    flex: 6;
    display: grid;
    flex-direction: column;
    grid-template-rows: 9fr 1fr;
    color: #000000;

    justify-content: center;
    align-items: center;

    @media (max-width: 1024px){
        grid-template-rows: 5fr 1fr;
        }

    ol{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        
        /* align-self: center; */
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 20px 0;
    }

    footer {
        text-align: center;
        font-size: 15px;
        margin-bottom: 70px;

        align-self: flex-end;
        @media (max-width: 1024px){
            margin-bottom: 40px;
        }
    }
`;