import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 95%;
  max-width:51.84rem;
  max-height:17.34rem;

  padding: 1rem 1.5rem;
  margin: 0 auto;
  background-color:#fff;

  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  button{
    width: 15rem;
    padding: 0.5rem;
    color:#fff;
    background-color: #F51344;
    border: none;
    outline: none;
    font-weight: 700;
    border-radius: 0.3rem;
  }
`

export const FieldContaner = styled.div`
  max-width: 25rem;
  /* padding: 0.5rem; */
  margin:0 0.5rem 0.5rem 0;

  border: 1px solid #aaa;
  color:#333;

  border-radius: 0.25rem;
  flex: 1 1 10rem;
  display: flex;
  align-items: center;


  select, input{
    padding: 0.5rem;
    max-width: 40%;
    border: none;
    outline: none;
    flex: 1 1 5rem;
    color:#333;
  }

  label{
    padding: 0.5rem;
    min-width: 5rem;
    max-width: 50%; 
    flex: 1 1 5rem;

  font-weight: 700;
  }
  div{
    display: flex;
    span{
      padding: 0.5rem;
      height:100%;
      border-left:1px solid  #aaa;
    }
    select{
      max-width: 70%;
    }
  }

`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p{
    color: #aaa;
  }
`