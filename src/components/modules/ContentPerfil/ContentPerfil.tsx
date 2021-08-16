import { Container, ImageWrapper, NameWrapper } from './ContentPerfil.style';

interface ContentPerfilProps {
  image: string;
  name: string;
}

const ContentPerfil: React.FC<ContentPerfilProps> = ({ image, name }) => {
  return (
    <Container>
      <ImageWrapper image={image} />
      <NameWrapper>
        <span className="welcome">Bem vindo,</span>
        <strong className="name">{name}</strong>
      </NameWrapper>
    </Container>
  );
};

export default ContentPerfil;
