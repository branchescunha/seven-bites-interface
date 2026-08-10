import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    background-color: ${(props) => props.theme.cream};
    overflow-y: auto;
  }

  section {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 1200px;
    width: 100%;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;

    main {
      height: auto;
      min-height: 100vh;
    }
  }
`;
