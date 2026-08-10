import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(32, 33, 36, 0.08);

  * {
    color: ${(props) => props.theme.darkGray};
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.graphite};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 15px;
      text-align: center;
    }

    .items {
      grid-area: items;
      padding-left: 20px;
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;
    border-top: 1px solid ${(props) => props.theme.border};

    * {
      font-weight: 700;
      color: ${(props) => props.theme.graphite};
    }
  }
`;
