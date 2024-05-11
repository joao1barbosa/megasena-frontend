import { styled } from "styled-components";

export const MainScreen = styled.div`    
    height: 100vh;
    width: 100vw;
    display: flex; 
    flex-direction: row;


    @media (max-width: 1024px){
        flex-direction: column;
    }
`;

export const InfoPart = styled.section`
    flex: 4;
    background-color: black;

    @media (max-width: 1024px){
        max-height: 45%;
    }
`;

export const NumberPart = styled.section`
    flex: 6;
    display: flex;
    flex-direction: column;
    color: #000000;

    justify-content: center;
    align-items: center;
    /* background-color: yellow; */

    ol{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        
        justify-content: center;
        gap: 20px;
        margin: auto 0;
    }

    footer {
        text-align: center;
        font-weight: 300px;
        font-size: 15px;
        margin-bottom: 70px;
    }
`;