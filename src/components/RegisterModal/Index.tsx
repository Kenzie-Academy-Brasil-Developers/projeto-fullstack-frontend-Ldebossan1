import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { RegisterData, schema } from './schema';
import useContextHook from '../../hooks/userContextHook';
import { StyledError, StyledContent } from './style';
import Input from '../Input';
import Button from '../Button';

interface RegisterModalProps {
  toggleModal: () => void;
}

const RegisterModal = ({ toggleModal }: RegisterModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = useContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <StyledContent>
        <div>
          <h2>Register form</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}>
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit(userRegister)}>
          <Input
            inputVariation={'form'}
            id={'nameRegister'}
            type={'text'}
            disabled={false}
            label={'Name'}
            required={true}
            placeholder={'Type your name'}
            register={register('name')}
          />
          {errors.name?.message && (
            <StyledError>{errors.name.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'email'}
            type={'emailRegister'}
            disabled={false}
            label={'Email'}
            required={true}
            placeholder={'Type your email'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneRegister'}
            type={'tel'}
            disabled={false}
            label={'Telephone'}
            required={true}
            placeholder={'Type your telephone'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordRegister'}
            type={'password'}
            disabled={false}
            label={'Password'}
            required={true}
            placeholder={'Type your password'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordConfirm'}
            type={'password'}
            disabled={false}
            label={'Confirm password'}
            required={true}
            placeholder={'Type again your password'}
            register={register('confirmPassword')}
          />
          {errors.confirmPassword?.message && (
            <StyledError>{errors.confirmPassword.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'login'}>
            Create Account
          </Button>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default RegisterModal;