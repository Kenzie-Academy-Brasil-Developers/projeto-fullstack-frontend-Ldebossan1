import styled from 'styled-components';

const StyledCard = styled.li`
  box-shadow: 1px 8px 17px 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      color: var(--color-primary);
      font-size: clamp(var(--font-size8), 3vw, var(--font-size3));
      margin-right: 5px;
    }

    p {
      color: var(--color-gray200);
      font-size: clamp(var(--font-size8), 3vw, var(--font-size3));
    }
  }
`;

export { StyledCard };