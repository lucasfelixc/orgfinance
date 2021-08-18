import { PercentageBar } from '~/components';
import { moneyFormat } from '~/utils/format';

import { ContentTop, WrapperValues } from './PaymentLimit.style';

const PaymentLimit: React.FC = () => {
  const currentValue = 1750;
  const totalValue = 3000;

  return (
    <>
      <ContentTop>
        <span>Limite de pagamento pela internet</span>
        <WrapperValues>
          <span className="currentValue">{`${moneyFormat(
            currentValue
          )} / `}</span>
          <span className="totalValue">{moneyFormat(totalValue)}</span>
        </WrapperValues>
      </ContentTop>
      <PercentageBar currentValue={currentValue} totalValue={totalValue} />
    </>
  );
};

export default PaymentLimit;
