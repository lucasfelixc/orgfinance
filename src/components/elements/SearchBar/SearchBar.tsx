import Image from 'next/image';

import Search from '~/assets/images/icons/searchIc.svg';

import {
  Container,
  ContainerInput,
  ContentSearchImage,
} from './SearchBar.style';

const SearchBar = () => {
  return (
    <Container>
      <ContainerInput placeholder={'Buscar'} />
      <ContentSearchImage>
        <Image src={Search} alt="Search" width={15} height={15} />
      </ContentSearchImage>
    </Container>
  );
};

export default SearchBar;
