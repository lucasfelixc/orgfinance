import { Container } from './PercentageBar.style';

interface PercentageBarProps {
  currentValue: number;
  totalValue: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({
  currentValue,
  totalValue,
}) => {
  const percentToNextLevel = Math.round(currentValue * 100) / totalValue;

  return (
    <Container>
      <div className="content">
        <div style={{ width: `${percentToNextLevel}%` }} />
      </div>
    </Container>
  );
};

export default PercentageBar;
