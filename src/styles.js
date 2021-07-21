import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  height: 5rem;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  background-color: #004d40;
  box-shadow: 1px 2px 7px 1px #808080;
  padding: 0 1rem 0 1rem;
  h5 {
    font-family: var(--brand-font);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  nav {
    display: flex;
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      li {
        margin-right: 1rem;
        
      }
    }
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex: 1;
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  color: #000000;
`;



export const StyledLayout = styled.div`
  text-align: center;
`;


  