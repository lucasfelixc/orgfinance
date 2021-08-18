import ArrowDown from '~/assets/images/icons/arrow-down.svg';
import { BoxTransation } from '~/components';

import { Container } from './SpendingBox.style';

const SpendingBox = () => {
  return (
    <Container>
      <BoxTransation icon={ArrowDown} title={'Gastos'} value={2300} />
    </Container>
  );
};

export default SpendingBox;
