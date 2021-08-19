import styled from 'styled-components';

interface ContainerProps {
  background: string;
  backgroundLigth: string;
}

export const Container = styled.div<ContainerProps>`
  width: 6rem;
  height: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 0.5rem;
  border-radius: 1rem;
  margin-right: 2rem;

  background: ${(props) => props.background};

  cursor: pointer;

  transition: 0.3s;

  .value {
    font-size: 0.8rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.white};
  }

  .name {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.backgroundLigth};
  }
`;
