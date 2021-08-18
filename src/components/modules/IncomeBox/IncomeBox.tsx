import ArrowUp from '~/assets/images/icons/arrow-up.svg';
import { BoxTransation } from '~/components';

import { Container } from './IncomeBox.style';

const IncomeBox = () => {
  return (
    <Container>
      <BoxTransation
        icon={ArrowUp}
        title={'Rendimentos'}
        value={5253}
        simple={true}
      />
    </Container>
  );
};

export default IncomeBox;
