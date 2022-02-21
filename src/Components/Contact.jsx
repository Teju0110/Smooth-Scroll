import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <form>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="example@gmail.com" />
      <textarea placeholder="Write Here...." name="message"/>
      <input type='submit' value='send'/>
      </form>
    </div>
  );
};

export default Contact;
