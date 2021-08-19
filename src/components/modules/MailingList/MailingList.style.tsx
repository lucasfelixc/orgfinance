import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem 0;
`;

export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 1.2rem;
  }
`;

export const WrapperItems = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperButton = styled.button`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;

  border-radius: 50%;

  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray125};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin: 1rem 0;

  background-color: ${(props) => props.theme.colors.gray200};
`;
