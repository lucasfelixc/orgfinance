import { useState } from 'react';

import Image from 'next/image';

import LogoCard from '~/assets/images/icons/credit.svg';
import { moneyFormat } from '~/utils/format';

import {
  Container,
  ContentTop,
  ContentActions,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
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
          <CheckBoxWrapper>
            <CheckBox
              id="checkbox"
              type="checkbox"
              checked={isCredit}
              onChange={() => setIsCredit(!isCredit)}
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
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
