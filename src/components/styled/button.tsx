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
  outline: 1px solid transparent;
  outline-offset: 2px;

  &:hover {
    outline-color: var(--color-accent);
  }

  &:active {
    outline-offset: 0;
    filter: brightness(0.7);
  }

  @media only screen and (max-width: 900px) {
    font-size: 1.25vmax;
  }
`;
