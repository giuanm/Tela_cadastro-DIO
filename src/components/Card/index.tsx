import React from "react";
import {FiThumbsUp} from "react-icons/fi";

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/bb156824-fc60-4992-9f3e-225f2e8124bb.png" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/76171709?v=4" />
                    <div>
                        <h4>Giuan Miranda</h4>
                        <p>8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso HTML e CSS no bootcamp DIO do Global Avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JS</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export {Card}