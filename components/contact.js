import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        color: '#0b7a75',
        paddingBottom: 5,
        width: '640px', 
        marginBottom: 10,
        '& .Mui-focused' : {
          color: "#ef672dff"
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#183f47',
        },
        ['@media (max-width:699px)']: {
          width: '90vw',
        },
        ['@media (max-width:499px)']: {
          marginBottom: 15,
        },
      },
      multilineColor:{
        color: '#000',
        fontWeight: 600,
        borderWidth: "4px",
      },
  }));

export default function Contact() {
const classes = useStyles();
const [valuesEmail, setValuesEmail] = useState({
    name: ""
  });

const handleChangeEmail = name => event => {
    setValuesEmail({ ...valuesEmail, [name]: event.target.value });
  };

function isEmail(s) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(s);
  }

const emailError = isEmail(valuesEmail.name) !== true && valuesEmail.name.length !== 0;

    return (
        <div className="main">
            <div className="box">
                <p className="title">Skontaktuj się z nami</p>
                        
                            <TextField
                                InputProps={{
                                classes: {
                                    input: classes.multilineColor
                                }
                                }}
                                label="podaj email" 
                                className={classes.inputStyle} 
                                InputLabelProps={{style: {fontWeight: '400', color: '#000', letterSpacing: '1.2px'}}}
                                value={valuesEmail.name}
                                onChange={handleChangeEmail("name")}
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
                                className={classes.inputStyle} 
                                InputLabelProps={{style: {fontWeight: '400', color: '#000', letterSpacing: '1.2px'}}}
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="outlined"
                            />
                            <Button className={classes.button} variant="outlined"><b>WYŚLIJ</b></Button>
            </div>

            <style jsx>{`
                .main {
                    color: #000;
                    padding-bottom: 3vh;
                    padding-top: 3vh;
                }
                .box {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: white;
                    border-radius: 25px;
                }
                .title {
                    font-size: 50px;
                }
            `}</style>
        </div>
    );
}