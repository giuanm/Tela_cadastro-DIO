import {MdEmail, MdLock} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// import {Cadastro} from '../cadastro'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {api} from '../../services/api';

import {
    Column, 
    Container, 
    CriarText, 
    EsqueciText, 
    Row, 
    SubtitleLogin, 
    Title, 
    TitleLogin, 
    Wrapper 
} from "./styles";
import { IformData } from './types';

const schema = yup
    .object({
        email: yup
            .string()
            .email('Email não é válido')
            .required('Campo obrigatório'),
        password: yup
        .string()
        .min(3, 'No mínimo 3 caracteres')
        .required('Campo obrigatório')
  }).required();


const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });
    
    const onSubmit = async (formData: IformData) => {
        try{
            const { data } = await api
            .get(`users?email=${formData.email}&senha=${formData.password}`);

            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        
        }catch{
            alert('Houve um erro, tente novamente.')
        }

    };


    return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias 
                e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Já tem cadastro?</TitleLogin>
                <SubtitleLogin>Faça seu Login e Make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        name="email" 
                        errorMessage={errors?.email?.message} 
                        control={control} 
                        placeholder="E-mail" 
                        leftIcon={<MdEmail />}
                    />
                    <Input 
                        name="password" 
                        errorMessage = {errors?.password?.message} 
                        control={control} 
                        placeholder="Senha" 
                        leftIcon={<MdLock />} 
                        type="password"/>
                    <Button title="Entrar" variant="secondary" type="Submit"/>
                </form>
            <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText href="Cadastro">Criar Conta</CriarText>
            </Row>
            </Wrapper>
        </Column>
    </Container>
 
    </>)
}

export {Login}