import {
  CreditCard,
  PaymentLimit,
  IncomeBox,
  SpendingBox,
  SpendingList,
} from '~/components';

import { Container, Wrapper, WrapperBoxValues } from './view.style';

const View = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Dashboard</h1>
        <CreditCard value={2200} number={4485} />
        <PaymentLimit />
        <WrapperBoxValues>
          <IncomeBox />
          <SpendingBox />
        </WrapperBoxValues>
        <SpendingList />
      </Wrapper>
      <Wrapper>
        <h1>Hello world</h1>
      </Wrapper>
    </Container>
  );
};

export default View;
