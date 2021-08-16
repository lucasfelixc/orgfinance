import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: ${(props) => props.theme.colors.blueTwitter};
`;

export const Wrapper = styled.div`
  width: 85%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${(props) => props.theme.colors.blueTwitter};
`;

export const ContentButtons = styled.div`
  min-width: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
