import React from "react"
import "../style/maincontainer.sass"
import PerfilCard from "./PerfilCard"
import { useState} from "react";


//Gerenciamento de Perfis
const MainContainer = () => {
  const [components,setComponents] = useState([])

  function createElemente(){
    if(components.length<4){
      setComponents([...components,'Luis'])
    }else{
      alert('Quantidade maxima de perfis criado')
    }
  }

  return <div id="container">
    <div className="button-wrapper align-end">
          <button onClick={createElemente}>Criar Perfil</button>
        </div>

        {components.map((item) => (<PerfilCard name={item}/> ))}

    </div>
}

export default MainContainer

