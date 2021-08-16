import styled from 'styled-components';

export const Container = styled.div`
  width: 24rem;
  height: 2.5rem;

  border-radius: 1.5rem;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.input`
  width: 85%;
  height: 100%;

  outline: none;
  border: none;
  border-radius: 1.5rem 0 0 1.5rem;
  padding-left: 1rem;

  background-color: ${(props) => props.theme.colors.gray50};
`;

export const ContentSearchImage = styled.button`
  width: 15%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 1.5rem 1.5rem 0;
  border: none;

  background-color: ${(props) => props.theme.colors.gray50};

  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.colors.gray100};
  }
`;
