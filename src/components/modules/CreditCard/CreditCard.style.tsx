import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;

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

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: 1rem;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  width: 2.65rem;
  height: 1.62rem;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.gray100};

  cursor: pointer;

  transition: 0.5s;

  &::after {
    content: '';

    display: block;

    border-radius: 50%;
    margin: 0.18rem;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);

    width: 1.12rem;
    height: 1.12rem;

    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 1rem;
  width: 2.65rem;
  height: 1.62rem;

  &:checked + ${CheckBoxLabel} {
    background-color: ${(props) => props.theme.colors.blueTwitter};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1.12rem;
      height: 1.12rem;
      margin-left: 1.31rem;
      transition: 0.2s;
    }
  }
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
