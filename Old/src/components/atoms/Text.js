import { colors } from "../../styles/colors";
import styled from "styled-components";
import { dimensions } from "../../styles/dimensions";

const Text = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ fontSize }) => fontSize || dimensions.font.base};
`;
