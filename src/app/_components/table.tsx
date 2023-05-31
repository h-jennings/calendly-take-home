"use client";

import { Space } from "@/app/_styles/theme";
import styled from "styled-components";

interface TableProps {
  margin?: Space;
}

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: ${({ margin = "1" }) => `var(--space-${margin})`};
  color: var(--colors-textPrimary);
  font-size: var(--fontSizes-small);
  font-weight: var(--fontWeights-regular);
  text-align: left;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background-color: var(--colors-surfaceSecondary);
  color: var(--colors-textPrimary);
  text-align: left;
`;

export const TableBody = styled.tbody`
  color: var(--colors-textPrimary);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--colors-surfaceSecondary);
  }
`;

export const TableHeaderCell = styled.th`
  padding: var(--space-1);
  font-weight: var(--fontWeights-bold);
`;

export const TableCell = styled.td`
  padding: var(--space-1);
  border: 1px solid var(--colors-surfaceAccent);
`;
