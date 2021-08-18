import styled from 'styled-components';

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 60%;

  span {
    color: ${(props) => props.theme.colors.gray500};
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const WrapperValues = styled.div`
  display: flex;
  align-items: center;

  margin: 0.5rem;

  span {
    font-size: 0.8rem;
  }

  .currentValue {
    color: ${(props) => props.theme.colors.blueDark};
  }

  .totalValue {
    margin-left: 0.2rem;
  }
`;
