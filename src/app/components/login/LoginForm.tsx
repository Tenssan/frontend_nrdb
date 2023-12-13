'use client';
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";
import  Heading  from '../product/Heading';
import Input from '../input/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import Link from 'next/link';
import { setCookie } from 'cookies-next';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState: {errors}, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleEmailChange = (value: string) => {
    setEmail(value); // Actualiza el estado del correo electrónico
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value); // Actualiza el estado de la contraseña
  };

  

  const loginMutation = gql`
    mutation LoginUser($loginInput: LoginUserInput!) {
      loginUsersTest(loginInput: $loginInput)
    }
  `;
 

  const [loginUser] = useMutation(loginMutation);

  const handleLogin:SubmitHandler<FieldValues> = async (data) => {
    try {
      const { data } = await loginUser({
        variables: {
          loginInput: {
            clave: password,
            correo: email,
          },
        },
      });
      const token = data.loginUsersTest;
      if (token) {
        console.log('Inicio de sesión exitoso');
      
      setCookie("token", token)
      router.push('../../');
  
        
      } else {
        setLoginError('Correo o contraseña inválidos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

    return (
      <>
      <Heading title='Log in to MonoStore' />
      <hr className='bg-slate-300 w-full h-px'/>
      <Input id='email' label='Email' disabled={isLoading} register={register}
      errors={errors} required onChange={handleEmailChange}/>
      <Input id='password' label='Password' disabled={isLoading} register={register}
      errors={errors} required type='password' onChange={handlePasswordChange}/>
      <Button label='Log in' onClick={handleSubmit(handleLogin)} disabled={isLoading}/>
      {loginError && <p className="text-red-500">{loginError}</p>}
      <div className='flex justify-between'>
        <p className='mr-10'>Do not have an account?{" "}<Link className='underline' href='/pages/register'>Sign up</Link></p>
        <p>Forgot your password?{" "}<Link className='underline' href='/pages/login/pass-recovery'>Reset password</Link></p>
      </div>
    </>
    );
  }
  
  export default LoginForm;