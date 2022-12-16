
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {Container, Column, Title, TitleHighLight } from "./styles";

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={4}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={90} nome="Giuan Miranda" image="https://avatars.githubusercontent.com/u/76171709?v=4" />
            <UserInfo percentual={80} nome="Giuan Miranda" image="https://avatars.githubusercontent.com/u/76171709?v=4" />
            <UserInfo percentual={75} nome="Giuan Miranda" image="https://avatars.githubusercontent.com/u/76171709?v=4" />
            <UserInfo percentual={70} nome="Giuan Miranda" image="https://avatars.githubusercontent.com/u/76171709?v=4" />
            <UserInfo percentual={67} nome="Giuan Miranda" image="https://avatars.githubusercontent.com/u/76171709?v=4" />
        </Column>
    </Container>
    </>)
}

export {Feed}