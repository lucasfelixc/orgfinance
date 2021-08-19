import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.white};

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  margin: 2rem 0;
`;

export const ContentTop = styled.div`
  width: 85%;

  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.colors.gray500};
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

export const ContentActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentValue = styled.div`
  width: 85%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 1rem 0;

  strong {
    font-size: 2.1rem;
    color: ${(props) => props.theme.colors.gray800};
  }
`;

export const ContentFooter = styled.div`
  width: 85%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;

  strong {
    color: ${(props) => props.theme.colors.gray800};
  }
`;
