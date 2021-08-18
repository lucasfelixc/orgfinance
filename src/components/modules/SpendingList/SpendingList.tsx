import { SpendingItem } from '~/components';
import { SpendingData } from '~/services/spendingData';

import {
  Container,
  WrapperItem,
  WrapperTitle,
  Divider,
} from './SpendingList.style';

const SpendingList = () => {
  return (
    <Container>
      <WrapperTitle>
        <strong className="title">Últimos gastos</strong>
        <Divider />
      </WrapperTitle>
      <WrapperItem>
        {SpendingData.map((o, index) => (
          <SpendingItem
            key={index}
            icon={o.icon}
            name={o.name}
            value={o.value}
          />
        ))}
      </WrapperItem>
    </Container>
  );
};

export default SpendingList;
