import { useState } from 'react';

import Image from 'next/image';

import Logout from '~/assets/images/icons/signOut.svg';
import Me from '~/assets/images/images/me.jpeg';
import Logo from '~/assets/images/images/OrgFinance.svg';
import { ContentPerfil, ContentBudget, PainelNavigation } from '~/components';
import { moneyFormat } from '~/utils/format';

import { Container, ContentImage, ContentLogout } from './SideBar.style';

const SideBar = () => {
  const [name, setName] = useState('Lucas');
  const [budget, setBudget] = useState(6425);

  return (
    <Container>
      <ContentImage>
        <Image src={Logo} alt="Search" width={180} height={50} />
      </ContentImage>
      <ContentPerfil name={name} image={Me.src} />
      <ContentBudget budget={moneyFormat(budget)} title={'Orçamento mensal'} />
      <PainelNavigation />
      <ContentLogout>
        <Image src={Logout} alt="Search" width={18} height={18} />
        <span>Sair</span>
      </ContentLogout>
    </Container>
  );
};

export default SideBar;
