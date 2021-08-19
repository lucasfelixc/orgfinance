import { MailingList } from '~/services/mailignList';
import { Schedule } from '~/services/schedulePayments';

import View from './view';

const Controller = (props: any) => {
  return (
    <View
      {...props}
      MailingListData={MailingList}
      ScheduleListData={Schedule}
    />
  );
};

export default Controller;
