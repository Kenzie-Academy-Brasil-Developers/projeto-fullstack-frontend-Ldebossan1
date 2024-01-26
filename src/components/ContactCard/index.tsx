import React from 'react';
import { iContact } from '../../providers/contactsContext/types';
import { StyledCard } from './style';
import { AiFillEdit } from 'react-icons/ai';
import Button from '../Button';

interface iContactCardProps {
  data: iContact;
  setContact: (data: iContact) => void;
}

const ContactCard = ({ data, setContact }: iContactCardProps) => {
  return (
    <StyledCard key={data.id}>
      <div>
        <p>
          <span>Name:</span> {data.name}
        </p>
        <p>
          <span>Email:</span> {data.email}
        </p>
        <p>
          <span>Telephone:</span> {data.phone}
        </p>
      </div>
      <div>
        <Button
          type={'button'}
          buttonVariation={'editContact'}
          onClick={() => setContact(data)}>
          <AiFillEdit />
        </Button>
      </div>
    </StyledCard>
  );
};

export default ContactCard;