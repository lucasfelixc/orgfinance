import {
  CreditCard,
  PaymentLimit,
  IncomeBox,
  SpendingBox,
  SpendingList,
  ExpensesStatistics,
  MailingList,
  ScheduleList,
} from '~/components';

import { Container, Wrapper, WrapperBoxValues } from './view.style';

interface ViewProps {
  MailingListData: models.PersonData[];
  ScheduleListData: models.PaymentData[];
}

const View: React.FC<ViewProps> = ({ MailingListData, ScheduleListData }) => {
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
        <ExpensesStatistics />
        <MailingList data={MailingListData} />
        <ScheduleList list={ScheduleListData} />
      </Wrapper>
    </Container>
  );
};

export default View;
