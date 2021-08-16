import Notification from '~/assets/images/icons/notification.svg';
import Settings from '~/assets/images/icons/settings.svg';
import { SearchBar, CircleButton } from '~/components';

import { Container, Wrapper, ContentButtons } from './Header.style';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <SearchBar />
        <ContentButtons>
          <CircleButton image={Settings} width={20} height={20} />
          <CircleButton
            image={Notification}
            width={20}
            height={20}
            notifications={true}
          />
        </ContentButtons>
      </Wrapper>
    </Container>
  );
};

export default Header;
