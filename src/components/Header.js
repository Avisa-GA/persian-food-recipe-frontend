import { Link, useHistory } from "react-router-dom";
import { StyledHeader } from "../styles";

export default function Header()
{
    const history = useHistory();

    return (
        <StyledHeader>
            <Link to="/">
                <h5>Persian Recipe Foods</h5>
            </Link>
        </StyledHeader>
    )
}