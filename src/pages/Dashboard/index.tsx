import React, { useState } from 'react';
import useContextHook from '../../hooks/userContextHook';
import useContactContextHook from '../../hooks/contactContextHook';
import EditProfileModal from '../../components/EditProfileModal';
import AddContactModal from '../../components/AddContactModal';
import EditContactModal from '../../components/EditContactModal';
import ContactCard from '../../components/ContactCard';
import { FaUserEdit } from 'react-icons/fa';
import { BsPersonPlusFill } from 'react-icons/bs';
import { iContact } from '../../providers/contactsContext/types';
import { StyledHeader, StyledMain } from './style';
import Button from '../../components/Button';
import noContactImage from '../../assets/img/undraw_nocontacts.svg';

const Dashboard = () => {
  const { user, updatedUser, isOpenModal, toggleModal, logOff } =
    useContextHook();
  const {
    toggleContactModal,
    isOpenContactModal,
    toggleEditContactModal,
    isOpenEditContactModal,
  } = useContactContextHook();

  const [contactId, setContactId] = useState<number>(0);

  const setContact = (elt: iContact) => {
    toggleEditContactModal();
    setContactId(elt.id);
  };

  return (
    <>
      <StyledHeader>
        <div>
          <h1>Clients Management</h1>
          <div>
            <p>Name: {updatedUser.name}</p>
            <p>Email: {updatedUser.email}</p>
            <p>Telephone: {updatedUser.phone}</p>
          </div>
        </div>
        <div>
          <Button
            onClick={toggleModal}
            buttonVariation={'editProfile'}
            type={'button'}>
            Edit profile
            <FaUserEdit size={20} />
          </Button>
          <Button onClick={logOff} buttonVariation={'logout'} type={'button'}>
            Logout
          </Button>
        </div>
      </StyledHeader>
      <StyledMain>
        <section>
          <div>
            <Button
              type={'button'}
              onClick={toggleContactModal}
              buttonVariation={'addContact'}>
              Add contact
              <BsPersonPlusFill />
            </Button>
          </div>

          <ul>
            <li>
              {user.contacts.length > 0 ? (
                user.contacts.map((elt) => {
                  return (
                    <ContactCard
                      key={elt.id}
                      data={elt}
                      setContact={setContact}></ContactCard>
                  );
                })
              ) : (
                <div>
                  <p>You don't have contacts yet, add the first one!</p>
                  <img
                    src={noContactImage}
                    alt='Pessoa sentada adicionando contatos de um cliente'
                  />
                </div>
              )}
            </li>
          </ul>
        </section>
        {isOpenModal && <EditProfileModal toggleModal={toggleModal} />}
        {isOpenContactModal && (
          <AddContactModal toggleContactModal={toggleContactModal} />
        )}
        {isOpenEditContactModal && (
          <EditContactModal
            contactId={contactId}
            toggleEditContactModal={toggleEditContactModal}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;