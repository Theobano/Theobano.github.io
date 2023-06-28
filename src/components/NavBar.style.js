import styled from "styled-components";


export const NavBarContainer = styled.nav`
  --navbar-height: 1.5em;
  --navbar-background-color: #3b4d61;
  /* --navbar-background-color: #212125; */
  --nav-link-color: #f5f5dc;
  /* min-height: var(--navbar-height); */
  width: 100%;
  /* background-color: var(--navbar-background-color); */

  @media print {
    display: ${props => props.printable ? "block" : "none"};
  }

 > ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

 li {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0em 1em;
}

.nav-link {
  display: block;
  padding: 1em 0em;
  text-decoration: none;
  color: var(--nav-link-color);
}
.nav-link.active {
  border-bottom: 0.25em solid var(--theme-color);
  color: var(--theme-color);
  font-size: larger;
}

.nav-link:hover {
  box-shadow: inset 0px 0px 5em 0.1em #ffffff30;
}

`;