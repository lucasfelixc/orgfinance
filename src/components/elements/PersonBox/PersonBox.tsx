import { Container, WrapperImage } from './PersonBox.style';

interface PersonBoxProps {
  image: string;
  name: string;
}

const PersonBox: React.FC<PersonBoxProps> = ({ image, name }) => {
  return (
    <Container>
      <WrapperImage imageBackground={image} />
      <span className="name">{name}</span>
    </Container>
  );
};

export default PersonBox;
