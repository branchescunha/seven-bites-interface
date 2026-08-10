import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px 40px;

  .carousel-item {
    padding: 52px 12px 8px;
  }

  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: hidden;
    padding-top: 48px;
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
  margin: 0 0 28px;

  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.brand};
    bottom: 0;
    left: calc(50% - 28px);
  }
`;
