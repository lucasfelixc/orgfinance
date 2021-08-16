import styled from 'styled-components';

export const Container = styled.div``;

export const NameWrapper = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .budget {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .title {
    color: ${(props) => props.theme.colors.gray500};
    font-size: 0.9rem;
  }
`;
