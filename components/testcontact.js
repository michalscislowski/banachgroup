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
      <a className="title">Skontaktuj się z nami</a>
        <form className="contact" onSubmit={sendEmail}>
            <label className="email">Email</label>
            <input className="emailvalue" type="email" name="user_name" id="user_name" />
            <label className="text" >Wiadomość</label>
            <textarea className="textvalue" name="message" id="message"/>
            <input className="button" type="submit" value="WYŚLIJ" />
        </form>
        <style jsx>{`
                .main {
                  height: 100vh;
                  padding-top: 20vh;
                  
                  background-color: #28313B;
                }
                .title {
                  padding-bottom: 20px;
                  font-size: 4.2rem;
                  font-weight: 600;
                  color: rgba(243, 182, 31, 1);
                }
                .contact {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  color: white;
                }
                .email {
                  margin-top: 5vh;
                  font-size: 3rem;
                }
                .emailvalue {
                  width: 35vw;
                  height: 30px;
                }
                .text {
                  margin-top: 5vh;
                  font-size: 3rem;
                }
                .textvalue {
                  width: 35vw;
                  min-height: 9.5vh;
                }
                .button {
                  margin-top: 5vh;
                  height: 4vh;
                  width: 6vw;
                }
            `}</style>
    </div>
        
  );
}
