import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px;
  overflow-x: hidden;

  .carousel-item {
    padding: 0 12px;
  }

  .react-multiple-carousel__arrow--left {
    left: 4px;
  }

  .react-multiple-carousel__arrow--right {
    right: 4px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.graphite};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 0 0 32px;

  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.amber};
    bottom: 0;
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background: url("${(props) => props.$imageUrl}");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 220px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  box-shadow: 0 16px 40px rgba(32, 33, 36, 0.1);
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  width: 100%;
  background: linear-gradient(180deg, transparent, rgba(32, 33, 36, 0.86));
  padding: 72px 18px 18px;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.amber};
  }
`;
