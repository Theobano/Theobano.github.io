import styled from "styled-components";

export const ErrorFallbackContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  text-align: center;

 h1,
h2 {
  margin: 0;
}

button{
    background-color: var(--theme-color);
    color: var(--primary-text-color);
    border: none;
    /* border-radius: 0.5em; */
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
    box-shadow: 0 0 0.2em var(--theme-color);
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: var(--color-tertiary);
        color: var(--color-text-quinary);
    }

    &:active {
        background-color: var(--theme-color);
        color: var(--primary-text-color);
    }
}
`;