import '../style/perfilcard.sass'
import Avatar from 'react-avatar';


function PerfilCard({ name, id, onDelete}) {
  return <div>
    <a href className="card">
      <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} className='icon' name={name} />
      <div className='direction-colunm'>
        <h2>{name}</h2>
      </div>
      <button onClick={() => onDelete(id)}>Deletar</button>
    </a>
  </div>
}

export default PerfilCard