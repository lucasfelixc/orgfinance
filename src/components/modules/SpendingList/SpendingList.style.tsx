import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60%;
`;

export const WrapperTitle = styled.div`
  .title {
    font-size: 1.2rem;
  }
`;

export const WrapperItem = styled.div`
  width: 100%;
  max-height: 14rem;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid ${(props) => props.theme.colors.gray100};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray150};
    border-radius: 10px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin: 1rem 0;

  background-color: ${(props) => props.theme.colors.gray200};
`;
