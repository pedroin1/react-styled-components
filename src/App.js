import { useState } from 'react';
import Image from './images/formicon.jpg'
import { ButtonStyled, ContainerStyled, UlStyled} from './styles';

function App() {

  const [coment, setComent] = useState();
  const [allComents, setAllComents] = useState([])

  function clear(){
    setComent('')
  }

  const handlerClickButton = () => {
    if(coment){
      let allOldComents = [...allComents, coment];
      setAllComents(allOldComents);
      clear()
    }else{
      alert('anotacao vazia')
    }
  }

  const handlerTextArea = (event) => {
    setComent(event.target.value)
  }

  return (
    <ContainerStyled>
      <img src={Image} alt='imagem-pessoas'/>
      <textarea onChange={handlerTextArea} value={coment} placeholder='Seu comentário aqui'></textarea>
      <ButtonStyled digitado={coment} onClick={handlerClickButton}>Comentar</ButtonStyled>
       
      <UlStyled tamanhoLista = {allComents.length}>
          {
            allComents.map((coment, index) => {
              return <li key={index}>{coment}</li>
            })
          }
      </UlStyled>
    </ContainerStyled>
  );
}

export default App;
