import Image from 'next/image';
import Link from 'next/link';

import { Container, Title } from './PainelNavigationItem.style';

interface PainelNavigationItemProps {
  title: string;
  icon: string;
  iconBlack: string;
  width: number;
  height: number;
  active: boolean;
  route: string;
}

const PainelNavigationItem: React.FC<PainelNavigationItemProps> = ({
  title,
  icon,
  iconBlack,
  width,
  height,
  active,
  route,
}) => {
  return (
    <Link href={route}>
      <Container>
        {icon && width && height && (
          <Image
            src={active ? iconBlack : icon}
            alt="Search"
            width={width}
            height={height}
          />
        )}
        {title && <Title active={active}>{title}</Title>}
      </Container>
    </Link>
  );
};

export default PainelNavigationItem;
