import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};

  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email))
    errors.email = "Debe ser un correo electronico";
  if (inputs.phone <= 0) errors.phone = "Solo numeros positivos";
  if (!inputs.subject) errors.subject = "Se requiere un asunto";
  if (!inputs.message) errors.message = "Se requiere un mensaje";

  return errors;
}

export default function Contact () {
  const [inputs, setInputs] =React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

const [errors, setErrors] = React.useState({
  name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

function handleChange(e) {
  setErrors(
    validate({
    ...inputs,
    [e.target.name]: e.target.value,
   })
  );

  setInputs({
    ...inputs,
    [e.target.name]: e.target.value,
  });
}

function handleSubmit(e){
  e.preventDefault()

if (Object.keys(errors).length) alert("Debes corregir los errores");
else {
  alert("Datos completos");
  setInputs({
    ame: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });
}
setErrors({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
       type="text" 
       name="name"
       value={inputs.name}
       onChange={handleChange}
       className= {errors.name && "warning"}
       placeholder="Escribe tu nombre..."
      />
      <p className= "danger">{errors.name}</p>

      <label htmlFor="email">Correo Electronico:</label>
      <input
       type="text"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        className= {errors.email && "warning"}
        placeholder="Escribe tu email..." 
      />
      <p className= "danger">{errors.email}</p>

      <label htmlFor="phone">Telefono:</label>
      <input
       type="number" 
       name="phone" 
       value={inputs.phone}
       className= {errors.phone && "warning"}
       placeholder="Escribe un telefono..." 
      />
      <p className= "danger">{errors.phone}</p>

      <label htmlFor="subject">Asunto:</label>
      <input 
      type="text"
       name="subject"
       value={inputs.subject}
       onChange={handleChange}
       className= {errors.subject && "warning"}
       placeholder="Escribe el asunto..."
      />
      <p className= "danger">{errors.subject}</p>

      <label htmlFor="message">Mensaje:</label>
      <textarea 
       name="message" 
       value={inputs.message}
       onChange={handleChange}
       id=""
       type="text" 
       cols="30" 
       rows="10" 
       className= {errors.message && "warning"}
       placeholder="Escribe tu mensaje..." 
      ></textarea>
      <p className= "danger">{errors.message}</p>
      
      <button type="submit">Enviar</button>
    </form>
  </div>
);
}
