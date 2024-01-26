import React from 'react';
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { CreateData, schema } from './schema';
import useContactContextHook from '../../hooks/contactContextHook';
import { StyledContent, StyledError } from './style';
import Input from '../Input';
import Button from '../Button';

interface AddContactModalProps {
  toggleContactModal: () => void;
}

const AddContactModal = ({ toggleContactModal }: AddContactModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateData>({
    resolver: zodResolver(schema),
  });

  const { contactRegister } = useContactContextHook();

  return (
    <Modal toggleModal={toggleContactModal}>
      <StyledContent>
        <div>
          <h2>Criar contato</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleContactModal}>
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit(contactRegister)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            required={true}
            placeholder={'Digite o nome'}
            register={register('name')}
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
            required={true}
            placeholder={'Digite o email'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'tel'}
            disabled={false}
            label={'Telefone'}
            required={true}
            placeholder={'Digite o telefone'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'login'}>
            Criar contato
          </Button>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default AddContactModal;