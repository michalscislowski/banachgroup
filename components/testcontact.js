import React, {useState} from 'react';
import MobileSocials from './mobileSocials';
import emailjs from 'emailjs-com';
import makeStyles from '@mui/styles/makeStyles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router'
import pl from '../public/locales/pl';
import en from '../public/locales/en';
import { store } from 'react-notifications-component';

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

function addSuccessNotification() {
  store.addNotification({
    title: "Sukces!",
    message: "Twoje e-mail został wysłany! Odpowiemy najszybciej jak to możliwe.",
    type: "success",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 10000,
      showIcon: true,
    }
  });
}

function addWarningNotification() {
  store.addNotification({
    title: "Uwaga!",
    message: "Oba pola muszą być wypełnione!",
    type: "warning",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 6000,
      showIcon: true,
    }
  });
}
export default function TestContact() {
  const classes = useStyles();
  const [email, setEmail] = useState(emptyEmail);
  const router = useRouter();
  const { locale } = router
  const t = locale === 'en' ? en : pl;
  const [msgError, setMsgError] = useState(false);


  const handleWarning = () => {
    addWarningNotification();
  };

  const handleSucces = () => {
    addSuccessNotification();
  };

  const handleChange = (e) => {
    setMsgError(false);
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
      console.log("success");

    } else if (email.user_name !== '' && email.message === '') {
      handleWarning();
      console.log('empty_message');
      setMsgError(true);
    }
    else {
      handleWarning();
      console.log('error');
    }
  }

  function isEmail(s) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(s);
  }

  const emailError = isEmail(email.user_name) !== true && email.user_name.length !== 0;

  return (
    <div className="main">
      <a className="title">{t.contact}</a>
        <form className="contact" onSubmit={sendEmail}>
          <TextField
            InputProps={{
              classes: {input: classes.multilineColor}
            }}
            className={classes.inputStyle} 
            InputLabelProps={{ style: {fontWeight: '400', color: '#dedede', fontFamily: 'Titillium Web', fontSize: '19px'}}}
            key={t.email}
            type="email"
            name="user_name"
            label={t.email}
            id="user_name"
            value={email.user_name}
            onChange={handleChange}
            helperText={emailError ? t.wrongemail : null}
            error={emailError}
            variant="outlined"
          />
          <TextField
            InputProps={{
              classes: {input: classes.multilineColor}
            }}
            className={classes.inputStyle} 
            InputLabelProps={{style: {fontWeight: '400', color: '#dedede', fontFamily: 'Titillium Web', fontSize: '19px'}}}
            name="message"
            label={t.message}
            id="message"
            value={email.message}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            error={msgError}
            helperText={msgError ? t.emptymsg : null}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
          > {t.sendbutton}
          </Button>
          <div className="box">
            <div className="data">
              <div className="left">
                <RoomIcon style={{ fontSize:'30px', backgroundColor: '#dedede', borderRadius: '5px'}}/>
              </div>
              <div className="right">
                <a>Wilczak 12F/48 Poznań</a>
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
                  background-image: url('backgrounds/long_black_stars3.jpg');
                  background-size: cover;
                }
                .title {
                  font-size: 50px;
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
                  font-size: 20px;
                }
                .mobile {
                  display: none;
                }
                @media only screen and (max-width: 1299px) and (orientation:landscape) {
                  .main {
                    padding-top: 60px;
                  }
                  .right a {
                    font-size: 20px;
                  }
                  .title {
                    font-size: 45px;
                    margin-bottom: 20px;
                    margin-top: 30px;
                  }
                  .data {
                    padding-top: 10px;
                  }
                  .box {
                    margin-top: 15px;
                  }
                }
                @media only screen and (max-width: 640px) {
                  .main {
                    padding-top: 10vh;
                    padding-bottom: 10vh;
                  }
                  .title {
                    font-size: 50px;
                  }
                  .data {
                    padding-left: 0px; 
                    padding-bottom: 10px;
                  }
                  .mobile {
                    display: block;
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
