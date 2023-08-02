import styled from 'styled-components'

export const ContainerStyled = styled.div `
  background: #3936CD;
  width: 414px;
  height: 869px;
  margin: 0 auto;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;

  //estilizando itens dentro do container
  img{
    width: 100%;
  }

  textarea{
    width: 342px;
    height: 138px;
    margin-top: 16px;
    margin-bottom: 16px;
    outline: none;
    padding: 5px;
    border-radius: 16px;
  }
`
export const ButtonStyled = styled.button `
  background: ${props => props.digitado ? '#000000' : 'grey'};
  border-radius: 10px;
  width: 95%;
  height: 50px;
  color:${props => props.digitado ? 'white' : '#000000'};
  border: none;
  font-size: 17px;
  cursor: pointer;
` 

export const UlStyled = styled.ul `

  height: 390px;
  padding: 0px;
  overflow-y: ${props => props.tamanhoLista > 4 ? 'scroll' : 'none'};

  li{
    background: rgba(255,255,255, 0.14);
    width: 342px;
    height: 68px;
    margin-top: 20px;
    list-style: none;
    color: white;
    padding: 5px;
    border-radius: 10px;
  }
`