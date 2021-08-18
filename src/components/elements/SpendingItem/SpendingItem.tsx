import Image from 'next/image';

import ArrowRight from '~/assets/images/icons/arrow-right.svg';
import { moneyFormat } from '~/utils/format';

import {
  Container,
  ContentIdentity,
  WrapperImage,
  ContentValue,
} from './SpendingItem.style';

interface SpendingItemProps {
  icon: string;
  name: string;
  value: number;
}

const SpendingItem: React.FC<SpendingItemProps> = ({ icon, name, value }) => {
  return (
    <Container>
      <ContentIdentity>
        <WrapperImage>
          <Image src={icon} alt="Search" width={20} height={20} />
        </WrapperImage>
        <span className="name">{name}</span>
      </ContentIdentity>
      <ContentValue>
        <span className="value">{moneyFormat(value)}</span>
        <Image src={ArrowRight} alt="Search" width={30} height={30} />
      </ContentValue>
    </Container>
  );
};

export default SpendingItem;
