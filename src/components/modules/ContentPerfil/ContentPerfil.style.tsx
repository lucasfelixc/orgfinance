import styled from 'styled-components';

interface ContentImage {
  image: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div<ContentImage>`
  width: 6rem;
  height: 6rem;

  border-radius: 50%;

  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
`;

export const NameWrapper = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .welcome {
    color: ${(props) => props.theme.colors.gray500};
    font-size: 0.8rem;
  }

  .name {
    color: ${(props) => props.theme.colors.blueDark};
    font-size: 1.1rem;
  }
`;
