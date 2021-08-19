import { moneyFormat } from '~/utils/format';

import { Container } from './PaymentCard.style';

const PaymentCard: React.FC<models.PaymentData> = ({
  value,
  name,
  background,
  backgroundLigth,
}) => {
  return (
    <Container background={background} backgroundLigth={backgroundLigth}>
      <span className="value">{`${moneyFormat(value)}/m`}</span>
      <span className="name">{name}</span>
    </Container>
  );
};

export default PaymentCard;
