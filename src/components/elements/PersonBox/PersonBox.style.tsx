import styled from 'styled-components';

interface WrapperImageProps {
  imageBackground: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-right: 2rem;

  transition: 0.3s;

  .name {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.gray500};
  }

  &:hover {
    background: ${(props) => props.theme.colors.gray125};
  }
`;

export const WrapperImage = styled.div<WrapperImageProps>`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  margin-bottom: 1rem;

  background: url(${(props) => props.imageBackground}) no-repeat;
  background-size: cover;
`;
