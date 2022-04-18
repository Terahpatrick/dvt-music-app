import { FC } from "react";
import styled from "styled-components";

import BaseSearchInput from "./BaseSearchInput";

import logoImg from "assets/music.jpg";
import { device } from "utils/breakPoints";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem 6rem;

  @media ${device.tablet} {
    padding: 1rem;
  }

  & > :first-child {
    margin-right: 1px;
  }
  & > :last-child {
    flex-basis: 100%;
  }
`;

const LogoContainer = styled.img`
  width: 3.1rem;
  border-radius: 0.2rem;
  cursor: pointer;
`;

const BaseNav: FC = () => {
  return (
    <NavContainer>
      <LogoContainer src={logoImg} alt="Logo" />
      <BaseSearchInput placeholder="Search Music" />
    </NavContainer>
  );
};

export default BaseNav;
