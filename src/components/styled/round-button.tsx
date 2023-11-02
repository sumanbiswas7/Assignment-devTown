import styled from "styled-components";

export const RoundButton = styled.button<{ disabled?: boolean }>`
  border: none;
  outline: none;
  border-radius: 0.25rem;
  background-color: var(--color-accent);
  pointer-events: ${(props) =>
    props.disabled ? "none" : "auto"}; // Disable pointer events when disabled

  filter: ${(props) => (props.disabled ? "brightness(0.4)" : "")};

  color: var(--color-background-dark);
  transition: all 200ms ease-in-out;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "pointer"}; // Change cursor when disabled
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
    pointer-events: ${(props) =>
      props.disabled ? "none" : "auto"}; // Disable pointer events on hover
  }

  &:active {
    outline-offset: 0;
    filter: ${(props) =>
      props.disabled
        ? "brightness(0.4)"
        : "brightness(0.7)"}; // Adjust filter on active
  }
`;
