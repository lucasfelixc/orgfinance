import Chart from '~/assets/images/icons/chart.svg';
import ChartBarrier from '~/assets/images/icons/chartBarrier.svg';
import ChartBarrierBlack from '~/assets/images/icons/chartBarrierBlack.svg';
import ChartBlack from '~/assets/images/icons/chartBlack.svg';
import Transactions from '~/assets/images/icons/transaction.svg';
import TransactionsBlack from '~/assets/images/icons/transactionBlack.svg';
import Wallet from '~/assets/images/icons/wallet.svg';
import WalletBlack from '~/assets/images/icons/walletBlack.svg';

export const ItemData = [
  {
    icon: Chart,
    iconBlack: ChartBlack,
    title: 'Dashboard',
    route: '/',
    width: 18,
    height: 18,
  },
  {
    icon: ChartBarrier,
    iconBlack: ChartBarrierBlack,
    title: 'Investimentos',
    route: '/investimentos',
    width: 18,
    height: 18,
  },
  {
    icon: Transactions,
    iconBlack: TransactionsBlack,
    title: 'Transações',
    route: '/transacoes',
    width: 18,
    height: 18,
  },
  {
    icon: Wallet,
    iconBlack: WalletBlack,
    title: 'Carteira',
    route: '/carteira',
    width: 18,
    height: 18,
  },
];
