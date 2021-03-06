import React, {useState} from 'react';
import MobileSocials from './mobileSocials';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    '@media (max-width:640px)': {
      width: '90vw',
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

const emptyEmail = {
  user_name: '',
  message: '',
};

export default function TestContact() {
  const classes = useStyles();
  const [email, setEmail] = useState(emptyEmail);
  const [open, setOpen] = useState(false);
  const [openSucces, setOpenSucces] = useState(false);


  const handleWarning = () => {
    setOpen(true);
  };

  const handleSucces = () => {
    setOpenSucces(true);
  };

  const handleClose = () => {
    setOpenSucces(false);
    setOpen(false);
  };

  const handleChange = (e) => {
    setEmail((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  };

  function sendEmail(e) {
    e.preventDefault();
    if (email.user_name !== '' && email.message !== ''){
      emailjs.sendForm('banach_contact', 'template_korn0vo', e.target, 'user_5KT4anh7XaqgEHyrhQh4Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setEmail(emptyEmail);
      handleSucces();

    } else {
      handleWarning();
    }
  }

  function isEmail(s) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(s);
  }
  
  const emailError = isEmail(email.user_name) !== true && email.user_name.length !== 0;

  return (
    <div className="main">
      <a className="title">Skontaktuj si?? z nami</a>
        <form className="contact" onSubmit={sendEmail}>
          <TextField
            InputProps={{
              classes: {input: classes.multilineColor}
            }}
            className={classes.inputStyle} 
            InputLabelProps={{ style: {fontWeight: '400', color: '#dedede', letterSpacing: '1.2px', fontFamily: 'Titillium Web' }}}
            key="podaj email"
            type="email"
            name="user_name"
            label="podaj email&nbsp;&nbsp;&nbsp;&nbsp;" 
            id="user_name"
            value={email.user_name}
            onChange={handleChange}
            helperText={emailError ? "niepoprawny adres email" : null}
            error={emailError}
            variant="outlined"
          />
          <TextField
            InputProps={{
              classes: {input: classes.multilineColor}
            }}
            className={classes.inputStyle} 
            InputLabelProps={{style: {fontWeight: '400', color: '#dedede', letterSpacing: '1.2px', fontFamily: 'Titillium Web'}}}
            name="message"
            label="wiadomo????" 
            id="message"
            value={email.message}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            className={classes.button}
            type="submit"
            variant="outlined"
          > WY??LIJ
          </Button>
          <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
              Prosz?? uzupe??ni?? dane
            </Alert>
          </Snackbar>
          <Snackbar open={openSucces} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Wiadomo???? wys??ana!
            </Alert>
          </Snackbar>
          <div className="box">
            <div className="data">
              <div className="left">
                <RoomIcon style={{ fontSize:'30px', backgroundColor: '#dedede', borderRadius: '5px'}}/>
              </div>
              <div className="right">
                <a>Wilczak 12F/48 Pozna??</a>
              </div>
            </div>
            <div className="data">
              <div className="left">
                <PhoneIcon style={{ fontSize:'30px', backgroundColor: '#dedede', borderRadius: '5px'}}/>
              </div>
              <div className="right">
                <a>884 108 114</a>
              </div>
            </div>
            <div className="mobile"><MobileSocials /></div>
          </div>
        </form>
        <style jsx>{`
                .main {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: stretch;
                  min-height: 100vh;
                  height: 100%;
                  background-color: #28313B;
                }
                .title {
                  font-size: 4.2rem;
                  font-weight: 600;
                  color: rgba(243, 182, 31, 1);
                  margin-bottom: 40px;
                }
                .contact {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                .button {
                  margin-top: 5vh;
                  height: 4vh;
                  width: 6vw;
                }
                .box {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: 40px;
                }
                .data {
                  padding-top: 20px;
                  display: flex;
                  width: 100%;
                  flex-direction: row;
                  align-items: flex-start;
                }
                .right {
                  color: #dedede;
                  padding-left: 20px;
                }
                .right a {
                  font-size: 1.5rem;
                }
                .mobile {
                  display: none;
                }
                @media only screen and (max-width: 640px) {
                  .main {
                    padding-top: 10vh;
                    padding-bottom: 10vh;
                  }
                  .title {
                    font-size: 3rem; 
                  }
                  .data {
                    padding-left: 0px; 
                    padding-bottom: 10px;
                  }
                  .mobile {
                    display: block;
                  }
                }
                @media only screen and (max-width: 1300px) {
                  .right a {
                    font-size: 1.25rem;
                  }
                  .title {
                      font-size: 3rem;
                  }
                  .data {
                    padding-top: 10px;
                  }
                  .box {
                    margin-top: 25px;
                  }
                }
                @media only screen and (max-width: 499px) {
                  .title {
                    margin-top: 20px;
                    font-size: 2rem;
                    margin-bottom: 20px;
                }
                }
            `}</style>
    </div>
        
  );
}
