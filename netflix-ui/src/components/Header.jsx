import styled from "styled-components";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bold;
    font-size: 1.05rem;
  }
`;
const Header = ({ login }) => {
  const navigate = useNavigate();
  const to = login ? "/login" : "/signup";
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(to)}>
        {login ? "Log In" : "Sign In"}{" "}
      </button>
    </Container>
  );
};

export default Header;
