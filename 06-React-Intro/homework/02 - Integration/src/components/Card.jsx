export default function Card(props) {
   const { name, status, species, gender, origin, image, onClose } = props

   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <p>{status}</p>
         <img src={image} alt='' />
         <p>{species}</p>
         <p>{gender}</p>
         <p>{origin}</p>
      </div>
   );
}
