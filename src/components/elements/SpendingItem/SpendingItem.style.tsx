import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.2rem 0;
  padding: 0.3rem;
  border-radius: 0.5rem;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray125};
  }
`;

export const WrapperImage = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray150};
  margin-right: 1rem;
`;

export const ContentIdentity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .name {
    font-weight: 400;
  }
`;
export const ContentValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
