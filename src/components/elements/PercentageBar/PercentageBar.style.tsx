import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;

  margin: 0.5rem 0;

  .content {
    width: 100%;
    flex: 1;
    height: 0.5rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.gray200};
    position: relative;
  }
  .content > div {
    height: 0.5rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.blueDark};
  }
`;
