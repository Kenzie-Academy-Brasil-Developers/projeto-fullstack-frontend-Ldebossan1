import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginData, schema } from './schema';
import RegisterModal from '../../components/RegisterModal';
import useContextHook from '../../hooks/userContextHook';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { StyledMain, StyledError } from './style';
import contactImage from '../../assets/img/undraw_conection.svg';

const LandingPage = () => {
  const { userLogin, toggleModal, isOpenModal } = useContextHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledMain>
      <section>
        <div>
          <h1>Clients Management</h1>
          <p>Here you can manage your clients contacts.</p>
        </div>
        <img src={contactImage} alt='Conections image' />
      </section>
      <section>
        <div>
          <p>Welcome</p>
          <h2>Make login with your account.</h2>
        </div>
        <form onSubmit={handleSubmit(userLogin)}>
          <Input
            inputVariation={'form'}
            id={'emailLogin'}
            type={'email'}
            disabled={false}
            label={'Email'}
            required={true}
            placeholder={'Account email'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordLogin'}
            type={'password'}
            disabled={false}
            label={'Password'}
            required={true}
            placeholder={'Account password'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'login'}>
            Login
          </Button>
        </form>
        <div>
          <p>Don't have an account?</p>
          <Button
            type={'submit'}
            buttonVariation={'register'}
            onClick={toggleModal}>
            Register
          </Button>
        </div>
      </section>
      {isOpenModal && <RegisterModal toggleModal={toggleModal} />}
    </StyledMain>
  );
};

export default LandingPage;