import styled from 'styled-components';

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
