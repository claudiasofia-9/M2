import Card from './Card'

export default function Cards(props) {
   console.log(props.characters)

   return (
      <div>
         Hola
         {
            props.characters.map(r => (
               <Card  
                  id={r.id}
                  name={r.name}
                  status={r.status}
                  species={r.species}
                  gender={r.gender}
                  origin={r.origin.name}
                  image={r.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   )
}
