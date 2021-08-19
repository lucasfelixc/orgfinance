import Image from 'next/image';

import Plus from '~/assets/images/icons/blue-plus.svg';
import { PersonBox } from '~/components';

import {
  Container,
  Divider,
  WrapperTop,
  WrapperItems,
  WrapperButton,
} from './MailingList.style';
interface PersonData {
  image: string;
  name: string;
}

interface MailingListProps {
  data: PersonData[];
}

const MailingList: React.FC<MailingListProps> = ({ data }) => {
  return (
    <Container>
      <WrapperTop>
        <strong className="title">Enviar dinheiro para</strong>
        <WrapperButton>
          <Image src={Plus} alt="Search" width={20} height={20} />
        </WrapperButton>
      </WrapperTop>
      <Divider />
      <WrapperItems>
        {data &&
          data.map((person, index) => (
            <PersonBox key={index} image={person.image} name={person.name} />
          ))}
      </WrapperItems>
    </Container>
  );
};

export default MailingList;
