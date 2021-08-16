import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 2rem;

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: calc((100% - 95vh) / 2);
  left: 2%;
`;

export const ContentImage = styled.div`
  width: 100%;
  height: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLogout = styled.div`
  width: fit-content;
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 3rem;
    color: ${(props) => props.theme.colors.gray500};
  }
`;
