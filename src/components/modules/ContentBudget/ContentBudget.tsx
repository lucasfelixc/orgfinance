import { Container, NameWrapper } from './ContentBudget.style';

interface ContentBudgetProps {
  budget: string;
  title: string;
}

const ContentBudget: React.FC<ContentBudgetProps> = ({ budget, title }) => {
  return (
    <Container>
      <NameWrapper>
        <strong className="budget">{budget}</strong>
        <span className="title">{title}</span>
      </NameWrapper>
    </Container>
  );
};

export default ContentBudget;
