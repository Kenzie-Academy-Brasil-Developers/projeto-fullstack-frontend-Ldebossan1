import styled, { css } from 'styled-components';

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius3);
  transition: 0.4s;

  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case 'login':
        return css`
          width: min(100%, 800px);
          height: 50px;
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius2);
          font-weight: var(--weight2);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #ffff;

          &:hover {
            background-color: var(--color-secondary);
            border-color: var(--color-secondary);
          }
        `;
      case 'register':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-weight: var(--weight4);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #2b6cb0;
        `;
      case 'delete':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-weight: var(--weight4);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: var(--color-gray300);
        `;
      case 'closeModal':
        return css`
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: none;
          font-weight: var(--weight2);
          font-size: clamp(var(--font-size7), 3vw, var(--font-size5));
          color: var(--color-gray300);

          &:hover {
            color: var(--color-primary);
          }
        `;
      case 'editProfile':
        return css`
          gap: 5px;
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-weight: var(--weight4);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #ffffff;
        `;
      case 'addContact':
        return css`
          gap: 5px;
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-weight: var(--weight2);
          font-size: clamp(var(--font-size5), 6vw, var(--font-size2));
          color: var(--color-gray200);
        `;
      case 'editContact':
        return css`
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          background-color: #ffffff;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));

          &:hover {
            background-color: var(--color-primary);
            color: #ffffff;
          }
        `;
      case 'logout':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-weight: var(--weight4);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #ffffff;
        `;
    }
  }}
`;