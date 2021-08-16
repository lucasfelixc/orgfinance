import styled from 'styled-components';

interface TitleProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 1.5rem 0;

  cursor: pointer;
`;

export const Title = styled.span<TitleProps>`
  color: ${(props) =>
    props.active ? props.theme.colors.gray800 : props.theme.colors.gray200};
  margin-left: 1rem;
`;
