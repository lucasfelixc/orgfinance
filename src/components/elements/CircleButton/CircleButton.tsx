import Image from 'next/image';

import { Container, ContentNotifications } from './CircleButton.style';

interface CircleButtonProps {
  image?: string;
  width?: number;
  height?: number;
  notifications?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  image,
  width,
  height,
  notifications,
}) => {
  return (
    <Container>
      {notifications && <ContentNotifications />}
      {image && width && height && (
        <Image src={image} alt="Search" width={width} height={height} />
      )}
    </Container>
  );
};

export default CircleButton;
