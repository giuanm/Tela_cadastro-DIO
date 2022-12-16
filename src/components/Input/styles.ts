import styled from "styled-components";

export const InputContainer = styled.div`
    border-botton: 1px solid #383450;
    width: 100%;
    max-width: 275px;
    height: 30px;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background: transparent;
    border: 1px solid transparent;
    border-bottom: 1px solid rgb(59, 52, 80);
    width: 100%;
    color: #fff;
    height: 30px;
    :focus {
        outline:none;
        border-bottom: 1px solid rgb(135, 71, 175);
        transition: border-color 0.15s ease 0s;
    }
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 13px;
    margin-top: 5px 0;
`
