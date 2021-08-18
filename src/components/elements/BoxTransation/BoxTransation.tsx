import Image from 'next/image';

import { moneyFormat } from '~/utils/format';

import { Container, WrapperData } from './BoxTransation.style';

interface BoxTransactionProps {
  simple?: boolean;
  icon: string;
  title: string;
  value: number;
}

const BoxTransation: React.FC<BoxTransactionProps> = ({
  simple,
  icon,
  title,
  value,
}) => {
  return (
    <Container simple={simple}>
      <Image src={icon} alt="Icon" width={40} height={40} />
      <WrapperData>
        <span className="title">{title}</span>
        <strong className="value">{moneyFormat(value)}</strong>
      </WrapperData>
    </Container>
  );
};

export default BoxTransation;
