import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100vw;
  height: 200px;
  background: rgb(239, 35, 60);
  background: linear-gradient(
    99deg,
    rgba(239, 35, 60, 1) 1%,
    rgba(180, 4, 33, 1) 24%,
    rgba(239, 35, 60, 1) 89%
  );

  & > :nth-child(1) {
    width: min(90%, 1400px);
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    gap: 20px;
    display: flex;
    justify-content: space-between;

    h1 {
      color: #f5f5f5;
      font-size: clamp(var(--font-size2), 7vw, var(--font-size0));
      text-decoration: underline;
    }

    & > div {
      display: flex;
      gap: 7px;
      flex-direction: column;

      p {
        color: #f5f5f5;
        font-size: clamp(var(--font-size9), 3.5vw, var(--font-size6));
      }
    }
  }

  & > :nth-child(2) {
    width: min(90%, 1400px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledMain = styled.main`
  margin-top: 25px;

  section {
    width: min(90%, 1400px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & > :nth-child(1) {
      display: flex;
      gap: 20px;
    }

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;

        p {
          color: var(--color-gray200);
          font-size: clamp(var(--font-size9), 4vw, var(--font-size4));
        }

        img {
          display: none;
          @media (min-width: 800px) {
            display: block;
            margin-top: 70px;
            width: 50%;
          }
        }
      }
    }
  }
`;

export { StyledHeader, StyledMain };