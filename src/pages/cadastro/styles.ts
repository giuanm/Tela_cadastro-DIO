import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 70px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    margin-top: 0;
    flex: 1;
    hr{
        width: 100%;
        max-width: 6rem;
        height: 0.5rem;
        background-image: linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%);
        background-position-x: initial;
        background-position-y: initial;
        background-size: initial;
        background-repeat-x: initial;
        background-repeat-y: initial;
        background-attachment: initial;
        background-origin: initial;
        background-clip: initial;
        background-color: initial;
        border-radius: 1rem;
        margin-bottom: 2rem;
        border: 1px solid transparent;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    margin-top: px;
    color: #fff;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    width: 320px;
    margin: 35px 0;
    line-height: 25px;
    strong{
     color: rgb(135, 71, 175);
    }
    strong:hover{
        cursor: pointer;
    }

    a{
        color: green;
        text-decoration: none;
        font-weight: 700;
    }
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
`

export const VoltarLogin = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-decoration: none;
    color: rgb(135, 71, 175);
`