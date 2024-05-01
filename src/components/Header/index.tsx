import { useNavigate } from "react-router-dom";
import React from "react";
// import {Home} from '../../pages/home'
import logo from '../../assets/logo_DIO.png'
import {Button} from "../Button";
import {
    BuscarInputContainer,
    Container,
    ImagemLogo,
    Row,
    Input,
    Menu,
    MenuRight,
    Wrapper,
    UserPicture,
} from './styles';
import {IHeader} from './types';

const Header=({autenticado}: IHeader) => {
    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/')
    }
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickCad = () => {
        navigate('/cadastro')
    }
    return (
        <Wrapper>
            <Container>
                <Row>
                    <ImagemLogo src={logo} alt="logo da dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/76171709?v=4" />
                            <Button title="Sair" onClick={handleClickHome}/>
                        </>
                    ) : (
                        <>
                            <MenuRight href="Home">Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickSignIn}/>
                            <Button title="Cadastrar" onClick={handleClickCad}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}