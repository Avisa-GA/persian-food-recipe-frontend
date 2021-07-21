import { StyledFooter } from "../styles";

export default function Footer(props) {
  return (
    <StyledFooter>
          <p style={{color: "#00695c"}}>&copy; All Rights Reserved {new Date().getFullYear()}</p>
    </StyledFooter>
  );
}