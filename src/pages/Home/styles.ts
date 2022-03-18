import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: 40px;
  color: red;
`;

export const Wrapper = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
// não se usa o export default neste caso pois cada arquivo desse é único e não podemos causar confusão