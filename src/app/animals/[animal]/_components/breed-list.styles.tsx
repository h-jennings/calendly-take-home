"use client";
import { StackY } from "@/app/_components/stack";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(StackY)`
  padding-left: var(--space-4);
`;

export const ListItem = styled.li`
  position: relative;
  padding: var(--space-2);
  border-radius: 8px;
  background-color: var(--colors-surfaceSecondary);
`;
export const ListLink = styled(Link)`
  color: var(--colors-textPrimary);
  font-size: var(--fontSizes-1);
  transition: var(--transitions-default);
  transition-property: color;
  text-decoration: none;

  &:hover {
    color: var(--colors-textAccent);
  }

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--sizes-full);
    height: var(--sizes-full);
  }
`;
