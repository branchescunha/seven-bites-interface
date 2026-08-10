import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  min-height: 250px;
  padding: 72px 18px 18px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: 0 18px 36px rgba(32, 33, 36, 0.09);
  position: relative;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    box-shadow: 0 22px 46px rgba(32, 33, 36, 0.14);
    transform: translateY(-2px);
  }

  div {
    width: 100%;
    min-height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    p {
      font-size: 18px;
      color: ${(props) => props.theme.graphite};
      line-height: 1.25;
      font-weight: 700;
      margin-top: 0;
    }

    strong {
      font-size: 22px;
      color: ${(props) => props.theme.brand};
      font-weight: 800;
      line-height: 1.1;
    }
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: 116px;
  object-fit: contain;
  position: absolute;
  top: -54px;
  filter: drop-shadow(0 16px 20px rgba(32, 33, 36, 0.18));
`;
