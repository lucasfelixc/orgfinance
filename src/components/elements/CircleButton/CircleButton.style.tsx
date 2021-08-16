import styled from 'styled-components';

export const Container = styled.button`
  width: 3.5rem;
  height: 3.5rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: none;
  outline: none;

  background-color: ${(props) => props.theme.colors.gray50};

  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.colors.gray100};
  }
`;

export const ContentNotifications = styled.div`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;

  position: absolute;
  top: 2px;
  right: 2px;

  box-shadow: 0px 0px 4px ${(props) => props.theme.colors.redNotification};

  background-color: ${(props) => props.theme.colors.redNotification};
`;
