import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Socials from './socials';
import Card from '@material-ui/core/Card'
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
      color: '#0b7a75',
      width: '640px', 
      marginBottom: 15,
      '& label.Mui-focused' : {
        color: 'red',
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: '#aa7c09',
      },
    },
    button: {
      background: '#39424c',
      color: '#dedede',
      '&:hover' : {
        background: '#28313B',
      }
    },
    box: {
      background: '#39424c',
      padding: '30px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ['@media (max-width:374px)']: {
        width: '100',
      },
    },
    multilineColor:{
      color: '#dedede',
      fontWeight: 600,
    },
  }));

export default function Contact() {
const classes = useStyles();
const [values, setValues] = useState({
    name: "" ,
    text: "" ,
  });

  const handleChange = (name)=> (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
};

  const isFormValid = () => {
    if (!values.name || !values.text) {

  return false;}
  else {
  return true;}

};

const sendEmail = (e) => {
  emailjs.sendForm('banach_contact', 'template_korn0vo', e.target)
    .then((result) => {
        console.log(result.text + 'IT IS WORKING');
    }, (error) => {
        console.log(error.text + 'IT DOES NOT :(');
    });
}

const handleSubmit = (e) => {
  // HERE: you always want to prevent default, so do this first
  e.preventDefault()
    if (!isFormValid()) {
       //message of error in the screen, maybe sweet alerts
       console.log('SOMETHING IS MISSING')
    } else{ 
      sendEmail(e)
    }
};

function isEmail(s) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(s);
}

const emailError = isEmail(values.name) !== true && values.name.length !== 0;

    return (
        <div className="container">
            <Card elevation={7} className={classes.box}>
              <a className="title">Skontaktuj się z nami</a>
                <TextField
                  InputProps={{
                    classes: {input: classes.multilineColor}
                  }}
                  label="podaj email" 
                  id="name"
                  className={classes.inputStyle} 
                  InputLabelProps={{style: {fontWeight: '400', color: '#dedede', letterSpacing: '1.2px'}}}
                  onChange={handleChange()}
                  inputProps={{
                    onChange: handleChange(),
                    id: 'name',
                    value: values.name,
                  }}
                  helperText={emailError ? "niepoprawny adres email" : null}
                  error={emailError}
                  variant="outlined"
                />
              <TextField
                  InputProps={{
                      classes: {
                          input: classes.multilineColor
                      }
                      }}
                  label="tekst"
                  id="text"
                  className={classes.inputStyle} 
                  InputLabelProps={{style: {fontWeight: '400', color: '#dedede', letterSpacing: '1.2px'}}}
                  inputProps={{
                    onChange: handleChange(),
                    id: 'text',
                    value: values.text,
                  }}
                  onChange={handleChange()}
                  multiline
                  rows={4}
                  variant="outlined"
              />
              <Button className={classes.button} variant="outlined" onClick={(e) => handleSubmit()}><b>WYŚLIJ</b></Button>
            </Card>
            <Socials />
            <style jsx>{`
                .container {
                  height: 100vh;
                  background-color: #28313B;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                .title {
                  padding-bottom: 20px;
                  font-size: 3.2rem;
                  font-weight: 600;
                  color: rgba(243, 182, 31, 1);
                }
                @media only screen and (max-width: 415px) {
                .title {
                  font-size: 30px;
                }

                }
            `}</style>
        </div>
    );
}