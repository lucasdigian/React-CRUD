import '../style/perfilcard.sass'
import Avatar from 'react-avatar';




function PerfilCard({name}) {
  return <a id='card'>
    <Avatar color={Avatar.getRandomColor(['red', 'green', 'blue'])} className='icon' name={name} />
    <div className='direction-colunm'>
      <h2>{name}</h2>
    </div>
  </a>
}

export default PerfilCard