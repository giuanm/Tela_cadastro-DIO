import styled, {css} from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;
    margin: auto 8px;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width:100%;
    &:hover{
        cursor: pointer;
    }


    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E41050;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
        
        &::after{
            content: '';
            position: bsolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            heigth: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`