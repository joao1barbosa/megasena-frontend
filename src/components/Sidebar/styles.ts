import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    /* background-color: red; */
    flex-direction: column;
    opacity: 0.1;

    /* svg {
        height: 100vh;  
        position: relative;
    } */
`;

export const Info = styled.section`
    /* background-color: yellow; */
    opacity: 0.4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
    z-index: 10;
`;