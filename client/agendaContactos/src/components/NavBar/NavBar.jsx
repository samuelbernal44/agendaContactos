import { Link } from 'react-router-dom';
import Container from '../Style/StyledNavBar';

const NavBar = () => {
  return (
    <Container>
      <Link to="/home">Home</Link>
      <Link to="/create">Form</Link>
    </Container>
  );
};

export default NavBar;
