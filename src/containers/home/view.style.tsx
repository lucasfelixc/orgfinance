import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  margin: 2rem 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Wrapper = styled.div`
  .title {
    color: ${(props) => props.theme.colors.blueDark};
  }
`;
