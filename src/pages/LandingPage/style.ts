import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: min(90%, 1400px);
  margin: 0 auto;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 800px) {
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
  }

  & > :nth-child(1) {
    margin-top: 70px;

    div {
      display: flex;
      flex-direction: column;
      gap: 15px;
      border-bottom: 2px solid var(--color-gray300);

      h1 {
        color: var(--color-primary);
        font-size: clamp(var(--font-size2), 7vw, var(--font-size0));
      }

      p {
        color: var(--color-quartenary);
        font-size: clamp(var(--font-size7), 4vw, var(--font-size3));
      }
    }

    img {
      display: none;
    }

    @media (min-width: 800px) {
      margin-top: 0;
      img {
        display: block;
        max-height: 500px;
        width: 55vw;
        margin-top: 20px;
      }
    }
  }

  & > :nth-child(2) {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;

    & > :nth-child(1) {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 7px;

      p {
        color: var(--color-gray300);
        font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
      }

      h2 {
        color: var(--color-gray300);
        font-size: clamp(var(--font-size5), 6vw, var(--font-size3));
      }
    }

    & > :nth-child(2) {
      width: 100%;

      button {
        margin-top: 20px;
      }
    }

    @media (min-width: 800px) {
      margin-top: 0;
    }

    & > :nth-child(3) {
      width: 100%;
      max-width: 800px;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 5px;

      p {
        color: var(--color-gray300);
        font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
      }
    }

    @media (min-width: 800px) {
      margin-top: 0;
    }
  }
`;

const StyledError = styled.p`
  margin-top: 10px;
  color: var(--color-negative);
  font-size: clamp(var(--font-size9), 3vw, var(--font-size6));
`;

export { StyledMain, StyledError };