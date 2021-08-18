import styled from 'styled-components';

interface ContainerProps {
  simple?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1rem;
  border-radius: 1rem;
  border: ${(props) =>
    props.simple ? `1px solid ${props.theme.colors.gray200}` : 'none'};

  box-shadow: ${(props) =>
    props.simple ? 'none' : '0px 4px 10px rgba(0, 0, 0, 0.25)'};

  background: ${(props) => (props.simple ? 'none' : props.theme.colors.gray50)};
`;

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 2rem;

  .title {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.gray500};
  }

  .value {
    font-size: 1rem;
    margin-top: 0.4rem;
  }
`;
