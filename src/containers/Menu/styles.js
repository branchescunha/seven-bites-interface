import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.cream};
`;

export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 320px;
  width: 100%;
  position: relative;
  padding: 64px 32px;
  background:
    linear-gradient(110deg, rgba(32, 33, 36, 0.94), rgba(143, 29, 44, 0.78)),
    radial-gradient(circle at right, rgba(200, 138, 45, 0.32), transparent 22rem),
    ${(props) => props.theme.graphite};

  h1 {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    font-size: clamp(36px, 5vw, 64px);
    line-height: 1;
    font-weight: 800;
    color: ${(props) => props.theme.white};

    span {
      display: block;
      max-width: 520px;
      margin-top: 18px;
      color: ${(props) => props.theme.darkWhite};
      font-size: 17px;
      font-weight: 500;
      line-height: 1.6;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  width: min(1180px, calc(100% - 32px));
  margin: 32px auto 0;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 999px;
  background: ${(props) =>
    props.$isActiveCategory ? props.theme.brand : props.theme.white};
  color: ${(props) =>
    props.$isActiveCategory ? props.theme.white : props.theme.graphite};
  font-size: 15px;
  font-weight: 700;
  padding: 10px 18px;
  line-height: 1;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 84px 24px 72px;
  gap: 72px 24px;
  justify-content: center;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
