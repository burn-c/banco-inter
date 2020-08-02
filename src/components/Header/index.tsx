import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropDown from '../AccountDropDown';
import IUser from './Header';

const Header: React.FC = () => {
  const user: IUser = { name: 'Carlos Oliveira' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
