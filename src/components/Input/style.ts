import styled, { css } from 'styled-components';

export interface iStyledInputProps {
  inputVariation?: string;
}

export const StyledInput = styled.div<iStyledInputProps>`
  gap: 3px;
  margin-top: 15px;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: fit-content;
    background-color: transparent;
  }

  input {
    ${({ inputVariation }) => {
      switch (inputVariation) {
        case 'form':
          return css`
            text-indent: 20px;
            width: min(100%, 800px);
            height: 50px;
            background-color: white;
            border: 2px solid var(--color-background);
            border-radius: var(--radius2);
            font-weight: var(--weight4);
            font-size: clamp(var(--font-size7), 4vw, var(--font-size6));

            &:focus {
              border-color: var(--color-gray300);
            }

            &::placeholder {
              color: var(--color-gray300);
            }
          `;
      }
    }}
  }

  label {
    font-weight: var(--weight4);
    font-size: var(--font-size7);
    color: var(--color-gray300);
  }
`;