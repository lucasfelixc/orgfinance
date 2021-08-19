import Image from 'next/image';

import Arrow from '~/assets/images/icons/blue-arrow-right.svg';
import { PaymentCard } from '~/components';

import {
  Container,
  WrapperTop,
  WrapperButton,
  WrapperCards,
  Divider,
} from './ScheduleList.style';

interface ScheduleListProps {
  list: models.PaymentData[];
}

const ScheduleList: React.FC<ScheduleListProps> = ({ list }) => {
  return (
    <Container>
      <WrapperTop>
        <strong className="title">Agenda de pagamentos</strong>
        <WrapperButton>
          <Image src={Arrow} alt="Search" width={20} height={20} />
        </WrapperButton>
      </WrapperTop>
      <Divider />
      <WrapperCards>
        {list.map((payment, index) => (
          <PaymentCard
            key={index}
            value={payment.value}
            name={payment.name}
            background={payment.background}
            backgroundLigth={payment.backgroundLigth}
          />
        ))}
      </WrapperCards>
    </Container>
  );
};

export default ScheduleList;
