import React from 'react';
import emailjs from 'emailjs-com';

export default function TestContact() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('banach_contact', 'template_korn0vo', e.target, 'user_5KT4anh7XaqgEHyrhQh4Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="main">
        <form className="contact" onSubmit={sendEmail}>
            <label>Email</label>
            <input type="email" name="user_name" id="user_name" />
            <label>Wiadomość</label>
            <textarea name="message" id="message"/>
            <input type="submit" value="Send" />
        </form>
        <style jsx>{`
                .main {
                  height: 100vh;
                  padding-top: 20vh;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  background-color: #28313B;
                }
                .contact {
                    color: white;
                }
            `}</style>
    </div>
        
  );
}
