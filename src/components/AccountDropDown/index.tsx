import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

const removeHashFromColor = (color: string): string => color.slice(1);

interface IAccountDropProps {
  user: { name: string };
}

const AccountDropDown: React.FC<IAccountDropProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&bold=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt="User"
      />
    </Container>
  );
};

export default AccountDropDown;
