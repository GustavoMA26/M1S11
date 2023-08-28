import styled from 'styled-components';

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 80%;
    height: 100%;
    padding: 10px;
    @media screen and (max-width: 420px) {
            display: flex;
            flex-direction: row;
    }

    h1{
    font-size: 60px;

    }
    img {
        width: 100px;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 420px) {
            display: flex;
            flex-direction: row;
            width: 50px;
    }


  }


`