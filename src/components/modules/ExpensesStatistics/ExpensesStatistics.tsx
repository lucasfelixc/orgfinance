import Image from 'next/image';

import ArrowDown from '~/assets/images/icons/litle-arrow-down.svg';
import { DoughnutChart } from '~/components';
import { ChartData } from '~/services/chartData';

import {
  Container,
  WrapperTop,
  SelectContent,
} from './ExpensesStatistics.style';

const ExpensesStatistics = () => {
  return (
    <Container>
      <WrapperTop>
        <strong className="title">Estatísticas de gastos</strong>
        <SelectContent>
          <span className="month">Agosto</span>
          <Image src={ArrowDown} alt="Search" width={20} height={20} />
        </SelectContent>
      </WrapperTop>
      <DoughnutChart data={{ ...ChartData }} />
    </Container>
  );
};

export default ExpensesStatistics;
