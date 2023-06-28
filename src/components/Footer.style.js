import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 200px;
  border-top: 5px double var(--theme-color);
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.dev-tech{
  font-size: 8pt;
  font-style: italic;
  font-weight: 300;
}

.social-links {
    display: flex;
    gap: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: thin solid var(--theme-color);
}

`;