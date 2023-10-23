import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import contactsImage from '../../img/contacts.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: white;
    overflow-x: hidden; // Esto evitará el desplazamiento horizontal
  }
`;

const BlueRectangle = styled.div`
  background-color: #036991;
  height: 30vh; // Esto cubrirá el 30% de la altura de la pantalla
  width: 100%; // Esto cubrirá toda la anchura de la pantalla
  position: fixed; // Esto mantendrá el rectángulo en su posición
  bottom: 0; // Esto colocará el rectángulo en el pie de la página
`;

const StyledImage = styled.div`
  width: 50%;
  height: 70vh;
  flex-shrink: 0;
  border-radius: 30px;
  background: url(${contactsImage}), lightgray 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 10%;
  position: absolute; // Esto posicionará la imagen absolutamente dentro del contenedor
  right: 0; // Esto colocará la imagen a la derecha
  z-index: 1; // Esto colocará la imagen encima del rectángulo azul
  margin-right: 40px;
`;

const Container = styled.div`
  position: relative; // Esto permite posicionar absolutamente los elementos hijos
  height: 100vh;
  overflow: hidden; // Esto ocultará cualquier contenido que se desborde del contenedor
`;

const StyledH1 = styled.h1`
  width: 592px;
  height: 93px;
  position: absolute; // Esto posicionará el h1 absolutamente dentro del contenedor
  top: 80px; // Esto colocará el h1 a 80px desde la parte superior del contenedor
  left: 113px; // Esto colocará el h1 a 113px desde la izquierda del contenedor
  flex-shrink: 0;
  color: #000;
  font-family: 'Architects Daughter', cursive;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
`;

const StyledP = styled.p`
  width: 500px;
  height: 88px;
  position: absolute; // Esto posicionará el p absolutamente dentro del contenedor
  top: 190px; // Esto colocará el p a 401px desde la parte superior del contenedor
  left: 113px; // Esto colocará el p a 113px desde la izquierda del contenedor
  font-family: 'Architects Daughter', cursive;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 44.47px;
`;

const StyledButton = styled.button`
  width: 287px;
  height: 61px;
  position: absolute; // Esto posicionará el botón absolutamente dentro del contenedor
  top: 350px; // Esto colocará el botón a 551px desde la parte superior del contenedor
  left: 223px; // Esto colocará el botón a 223px desde la izquierda del contenedor
  font-family: 'Architects Daughter', cursive;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 44.47px;
  text-align: center; // Esto centrará el texto dentro del botón
  background-color: #065e7a; // Esto dará al botón un color de fondo de #065E7A
  border-radius: 19px; // Esto dará al botón un borde redondeado de 19px
  color: white;
`;

export {
  BlueRectangle,
  GlobalStyle,
  StyledImage,
  Container,
  StyledH1,
  StyledP,
  StyledButton,
};
