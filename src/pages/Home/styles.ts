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
    /* position: absolute; */
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #6BEFA3;  
    color: #ffffff;

    @media (max-width: 1024px){
        max-height: 30%;
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
    align-items: center;
    margin-bottom: 70px;

    margin-left: -180px;

    h3{
        font-size: 13px;
        margin-bottom: 10px;
    }
`;

export const NumberPart = styled.section`
    flex: 6;
    display: flex;
    flex-direction: column;
    color: #000000;

    justify-content: center;
    align-items: center;

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

        @media (max-width: 1024px){
            margin-bottom: 40px;
        }
    }
`;