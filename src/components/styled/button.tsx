import styled from "styled-components";

export const Button = styled.button<{}>`
  border: none;
  outline: none;
  border-radius: 0.25rem;
  background-color: var(--color-accent);
  color: var(--color-background-dark);
  padding: 0.4rem 0.85rem;
  transition: all 200ms ease-in-out;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;
