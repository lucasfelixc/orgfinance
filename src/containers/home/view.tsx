import { CreditCard } from '~/components';

import { Container, Wrapper } from './view.style';

const View = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Dashboard</h1>
        <CreditCard value={2200} number={4485} />
      </Wrapper>
      <Wrapper>
        <h1>Hello world</h1>
      </Wrapper>
    </Container>
  );
};

export default View;
