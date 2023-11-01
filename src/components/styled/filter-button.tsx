import styled from "styled-components";

export const FilterButton = styled.button<{}>`
  border: none;
  outline: none;
  border-radius: 0.25rem;
  background-color: var(--color-accent);
  color: var(--color-background-dark);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  outline: 1px solid transparent;
  outline-offset: 2px;

  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    outline-color: var(--color-accent);
  }

  &:active {
    outline-offset: 0;
    filter: brightness(0.7);
  }
`;
