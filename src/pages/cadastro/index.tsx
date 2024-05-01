import {MdEmail, MdLock, MdPerson, MdSmartphone} from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// import {Login} from '../login'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
    Column, 
    Container, 
    VoltarLogin, 
    Row, 
    SubtitleLogin, 
    Title, 
    TitleLogin, 
    Wrapper 
} from "./styles";
import { IformDataCad } from './types';

const schema = yup
    .object({
        name: yup
            .string()
            .min(5, 'No mínimo 5 letras')
            .required('Campo obrigatório'),
        email: yup
            .string()
            .email('Email não é válido')
            .required('Campo obrigatório'),
        password: yup
        .string()
        .min(3, 'No mínimo 3 caracteres')
        .required('Campo obrigatório')
  }).required();


const Cadastro = () => {

    const { control} = useForm<IformDataCad>({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });
   
    return (
    <>
    <Header />
    <Container>
        <Column>
            <hr />
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias 
                e entrar mais rápido nas empresas mais desejadas.
            </Title>
            <VoltarLogin href='Login'>VOLTAR PARA O LOGIN</VoltarLogin>
        </Column>
        <Column>
            <hr />
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input 
                        name="name" 
                        control={control} 
                        placeholder="Nome Completo" 
                        leftIcon={<MdPerson />}
                    />
                    <Input 
                        name="email" 
                        control={control} 
                        placeholder="Seu melhor @e-mail" 
                        leftIcon={<MdEmail />}
                    />
                    <Input 
                        name="phone" 
                        control={control} 
                        placeholder="Celular ex:(85)98207-2650" 
                        leftIcon={<MdSmartphone />}
                    />
                    <Input 
                        name="password" 
                        control={control} 
                        placeholder="Senha" 
                        leftIcon={<MdLock />} 
                        type="password"
                        />
                    <Button title="CRIAR MINHA CONTA GRÁTIS" variant="primary" />
                </form>
                <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as <strong>Políticas de Privacidade</strong> e os <strong>Termos de Uso</strong> da DIO.</SubtitleLogin>
            <Row>
                <SubtitleLogin>Já tenho conta. <a href='Login'>Fazer login</a>.</SubtitleLogin>
            </Row>
            </Wrapper>
        </Column>
    </Container>
 
    </>)
}

export {Cadastro}