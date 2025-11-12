import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (

   <>
    
   <section className="contactPage">
    <h2 className="Contactt">Contact</h2>
  <form action="#" method="post"  className="contact-form">
    <div>
      <label htmlFor="name">Naam:</label>
      <input type="text" id="name" name="name" />
    </div>

    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>

    <div>
      <label htmlFor="message">Bericht:</label>
      <textarea id="message" name="message"></textarea>
    </div>

    <button type="submit">Verzend</button>
  </form>


</section>

<ContactInfo />



</>








 

  );
};

export default Contact;