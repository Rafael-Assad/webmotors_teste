import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  align-items: center;

  .tabsItem {
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    color: #999;

    svg {
      font-size: 2rem;
      margin-right: 0.5rem;

    }

    span {
    }
  }

  .car{
    border-bottom: 2px solid #F51344 ;
    color:#F51344 ;
  }
`;

export const Container = styled.div`
  width: 100vw;
  padding:0 5rem;
  max-width: 100%;
  display:flex;
  align-items: center;
  justify-content:space-between;

  button{
    width: 13rem; 
    height: 2.5rem;
    padding: 0.5rem;
    border: 2px solid #EB9B2B;
    color: #EB9B2B;

    border-radius: 0.3rem;

    outline: none;
  }
`
