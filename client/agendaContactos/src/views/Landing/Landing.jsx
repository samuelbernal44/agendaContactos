import { Link } from 'react-router-dom';
import {
  BlueRectangle,
  GlobalStyle,
  StyledImage,
  Container,
  StyledH1,
  StyledP,
  StyledButton,
} from '../../components/Style/StyledLanding';

const Landing = () => {
  return (
    <Container>
      <GlobalStyle />
      <StyledH1>ContactList</StyledH1>
      <StyledP>Gestiona tu lista de contactos de forma fácil y rápida!</StyledP>
      <Link to="/home">
        <StyledButton>Iniciar</StyledButton>
      </Link>
      <StyledImage />
      <BlueRectangle />
    </Container>
  );
};

export default Landing;
