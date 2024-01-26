import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { UpdateData, schema } from './schema';
import useContextHook from '../../hooks/userContextHook';
import { StyledContent, StyledError } from './style';
import Input from '../Input';
import Button from '../Button';

interface EditProfileModalProps {
  toggleModal: () => void;
}

const EditProfileModal = ({ toggleModal }: EditProfileModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateData>({
    resolver: zodResolver(schema),
  });

  const { userUpdate, updatedUser, userDelete } = useContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <StyledContent>
        <div>
          <h2>Profile update</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}>
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit(userUpdate)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Name'}
            required={false}
            placeholder={'Type your name'}
            register={register('name')}
            defaultValue={updatedUser.name}
          />
          {errors.name?.message && (
            <StyledError>{errors.name.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'Email'}
            required={false}
            placeholder={'Type your new email'}
            register={register('email')}
            defaultValue={updatedUser.email}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'tel'}
            disabled={false}
            label={'Telephone'}
            required={false}
            placeholder={'Type your new telephone'}
            register={register('phone')}
            defaultValue={updatedUser.phone}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordEditProfile'}
            type={'password'}
            disabled={false}
            label={'Password'}
            required={false}
            placeholder={'Type your new password'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <div>
            <Button type={'submit'} buttonVariation={'login'}>
              Update profile
            </Button>
            <Button
              type={'button'}
              buttonVariation={'delete'}
              onClick={userDelete}>
              Delete profile
            </Button>
          </div>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default EditProfileModal;