import { useRouter } from 'next/router';

import { PainelNavigationItem } from '~/components';
import { ItemData } from '~/services/navigationItemData';

import { Container } from './PainelNavigation.style';

const PainelNavigation = () => {
  const { asPath } = useRouter();
  const isActive = (path: string) => path === asPath;

  return (
    <Container>
      {ItemData &&
        ItemData.map((o, index) => (
          <PainelNavigationItem
            active={isActive(o.route)}
            route={o.route}
            key={index}
            icon={o.icon}
            iconBlack={o.iconBlack}
            title={o.title}
            width={o.width}
            height={o.height}
          />
        ))}
    </Container>
  );
};

export default PainelNavigation;
