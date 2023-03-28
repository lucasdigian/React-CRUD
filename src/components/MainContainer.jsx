import React from "react";
import "../style/maincontainer.sass";
import PerfilCard from "./PerfilCard";
import { useState } from "react";

//Gerenciamento de Perfis
const MainContainer = () => {
  const [components, setComponents] = useState([]);

  function createElemente() {
    if (components.length < 4) {
      setComponents([
        ...components,
        { id: components.length + 1, name: "luis" },
      ]);
    } else {
      alert("Quantidade maxima de perfis criado");
    }
  }

  const onDelete = id => {
    const filteredUsers = components.filter(u => u.id !== id);
    setComponents(filteredUsers);
  }

  return (
    <div id="container">
      <div className="button-wrapper align-end">
        <button onClick={createElemente}>Criar Perfil</button>
      </div>
      {components.map((item) => (
        <PerfilCard key={item.id} id={item.id} name={item.name} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default MainContainer;
