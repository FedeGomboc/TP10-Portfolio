import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
   setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Gracias por el mensaje!</div>
        <div className="text-md">Nos pondremos en contacto pronto.</div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-0 mb-3" style={{borderRadius: "9px"}}>
        <input type="text" placeholder="Tu nombre" name="name" required/>
      </div>
      <div className="pt-0 mb-3">
        <input type="email" placeholder="Tu mail" name="email" required/>
      </div>
      <div className="pt-0 mb-3">
        <textarea placeholder="Tu mensaje" name="message" required/>
      </div>
      <div className="pt-0 mb-3">
        <button type="submit"> Send a message</button>
      </div>
    </form>
  );
};

export default ContactForm;