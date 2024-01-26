/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react';
import api from '../../services/api';
import { iContact } from './types';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { CreateData } from '../../components/AddContactModal/schema';
import { UpdateData } from '../../components/EditProfileModal/schema';
import useContextHook from '../../hooks/userContextHook';
export interface iContactProviderValue {
  contactRegister: (data: CreateData) => void;
  contactUpdate: (data: UpdateData, id: number) => void;
  contactDelete: (id: number) => void;
  toggleContactModal: () => void;
  toggleEditContactModal: () => void;
  isOpenContactModal: boolean;
  isOpenEditContactModal: boolean;
}

export interface icontactProviderProps {
  children: React.ReactNode;
}

export const ContactContext = createContext({} as iContactProviderValue);

export const ContactProvider = ({ children }: icontactProviderProps) => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const [isOpenEditContactModal, setIsOpenEditContactModal] = useState(false);
  const { user, setUser } = useContextHook();

  const toggleContactModal = () => setIsOpenContactModal(!isOpenContactModal);

  const toggleEditContactModal = () =>
    setIsOpenEditContactModal(!isOpenEditContactModal);

  const contactRegister = async (data: CreateData) => {
    try {
      await api.post<iContact>('/contacts', data);
      const res = await api.get(`/users/${user.id}`);
      localStorage.setItem('@USER', JSON.stringify(res.data));
      setUser(res.data);
      toast.success('Contato criado com sucesso');
      toggleContactModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const contactUpdate = async (data: UpdateData, id: number) => {
    try {
      await api.patch(`/contacts/${id}`, data);
      const res = await api.get(`/users/${user.id}`);
      localStorage.setItem('@USER', JSON.stringify(res.data));
      setUser(res.data);
      toast.success('Contato atualizado com sucesso');
      toggleEditContactModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const contactDelete = async (id: number) => {
    try {
      await api.delete(`/contacts/${id}`);
      const res = await api.get(`/users/${user.id}`);
      localStorage.setItem('@USER', JSON.stringify(res.data));
      setUser(res.data);
      toast.success('Contato deletado com sucesso');
      toggleEditContactModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contactRegister,
        toggleContactModal,
        isOpenContactModal,
        toggleEditContactModal,
        isOpenEditContactModal,
        contactUpdate,
        contactDelete,
      }}>
      {children}
    </ContactContext.Provider>
  );
};