import { useState } from 'react';

import Image from 'next/image';

import LogoCard from '~/assets/images/icons/credit.svg';
import { SwitchButton } from '~/components';
import { moneyFormat } from '~/utils/format';

import {
  Container,
  ContentTop,
  ContentActions,
  ContentValue,
  ContentFooter,
} from './CreditCard.style';

interface CreditCardProps {
  value: number;
  number: number;
}

const CreditCard: React.FC<CreditCardProps> = ({ value, number }) => {
  const [isCredit, setIsCredit] = useState(true);

  return (
    <Container>
      <ContentTop>
        <span>Valor disponível</span>
        <ContentActions>
          <span>{isCredit ? 'Crédito' : 'Débito'}</span>
          <SwitchButton
            checked={isCredit}
            onChange={() => setIsCredit(!isCredit)}
          />
        </ContentActions>
      </ContentTop>
      <ContentValue>
        <strong>{moneyFormat(value)}</strong>
      </ContentValue>
      <ContentFooter>
        <strong>{`**** **** **** ${number}`}</strong>
        <Image src={LogoCard} alt="Search" width={50} height={50} />
      </ContentFooter>
    </Container>
  );
};

export default CreditCard;
