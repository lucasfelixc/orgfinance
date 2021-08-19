import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
`;

export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  .title {
    font-size: 1.2rem;
  }
`;

export const SelectContent = styled.div`
  display: flex;
  align-items: center;

  .month {
    color: ${(props) => props.theme.colors.gray500};
  }
`;
