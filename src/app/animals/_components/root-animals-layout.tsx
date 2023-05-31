"use client";

import { Flex } from "@/app/_components/flex";
import { StackX } from "@/app/_components/stack";
import { Text } from "@/app/_components/text";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

interface RootAnimalsLayoutProps {
  children: React.ReactNode;
}
export const RootAnimalsLayout = ({ children }: RootAnimalsLayoutProps) => {
  return (
    <Wrapper>
      <Nav style={{ gridArea: "navigation", zIndex: 1 }}>
        <NavInner>
          <StackX gap={2}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/animals">Animals</NavLink>
            <NavLink href="/animals/dogs">Dogs</NavLink>
          </StackX>
        </NavInner>
      </Nav>
      <Main style={{ gridArea: "main", zIndex: 0 }}>
        <InnerContainer>{children}</InnerContainer>
      </Main>
      <Footer style={{ gridArea: "footer", zIndex: 0 }}>
        <InnerContainer>
          <Flex justify="space-between">
            <Text>AnimalWorld &trade;</Text>
            <Text>&copy; {new Date().getFullYear()}</Text>
          </Flex>
        </InnerContainer>
      </Footer>
    </Wrapper>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <StyledNavLink href={href} active={String(isActive)}>
      {children}
    </StyledNavLink>
  );
};

const Wrapper = styled.div`
  --nav-height: 80px;

  background-color: var(--colors-surfacePrimary);
  color: var(--colors-textPrimary);
  font-size: var(--fontSizes-0);

  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-areas:
    "navigation"
    "main"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: var(--sizes-screenH);
`;

const InnerContainer = styled.div`
  max-width: var(--sizes-desktop);
  margin: 0 auto;
  width: var(--sizes-full);
`;

const Footer = styled.footer`
  background-color: var(--colors-surfaceSecondary);
  padding: var(--space-4);
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: var(--nav-height);
  width: var(--sizes-full);
  background-color: var(--colors-surfacePrimary);
  padding: 0 var(--space-4);
`;

const NavInner = styled.div`
  height: var(--sizes-full);
  width: var(--sizes-full);
  margin: 0 auto;
  max-width: var(--sizes-desktop);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--colors-white);
`;

const StyledNavLink = styled(Link)<{ active?: string }>`
  color: var(--colors-textPrimary);
  text-decoration: none;
  transition: var(--transitions-default);
  transition-property: color, text-decoration;

  &:hover {
    text-decoration: underline;
    color: var(--colors-textAccent);
  }

  ${({ active }) =>
    active === "true" &&
    `
    text-decoration: underline;
    color: var(--colors-textAccent); 
  `}
`;

const Main = styled.main`
  width: var(--sizes-full);
  padding-top: calc(var(--nav-height) + var(--space-5));
  padding-left: var(--space-4);
  padding-right: var(--space-4);
`;
