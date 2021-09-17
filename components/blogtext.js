import React, { useState, useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton';
import { CardHeader } from '@mui/material'
import axios from "axios"
import { useRouter} from 'next/router'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} size="large" />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const featuredPosts = [
  {
    id: '1',
    title: 'Featured post',
    date: 'Nov 12',
    image: ('/backgrounds/long_black_stars1.jpg'),
    short:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nunc a ante faucibus fermentum et a lorem.',
    long1:
      'Sed efficitur non enim et laoreet. Suspendisse potenti. Phasellus non augue sed arcu maximus lobortis. Maecenas felis est, tempor quis tempor nec, congue sed massa. Proin sed molestie massa. Aenean eros nulla, placerat ac justo nec, consectetur consequat justo. Donec ornare molestie posuere. Phasellus non sollicitudin risus. Integer faucibus elit convallis metus imperdiet, a sodales nisi molestie. Nam ac ex sodales, faucibus mi quis, scelerisque nibh. Nulla tempus massa eros, vitae euismod nunc posuere sed. Pellentesque non fringilla lorem. Aenean placerat, justo a ornare consectetur, ligula mauris tempor elit, quis posuere risus tellus eget tellus. Maecenas quam elit, eleifend ut metus pharetra, vulputate venenatis lectus. Vivamus posuere, eros id porta tincidunt, tortor orci accumsan diam, nec varius nibh purus lacinia sem. Etiam faucibus augue sit amet varius accumsan. Pellentesque eget felis sit amet diam lobortis ullamcorper feugiat pretium tellus. Vivamus sodales justo eu venenatis venenatis. Pellentesque id diam orci. Donec euismod vehicula libero eu pulvinar. Mauris finibus ex sit amet diam condimentum egestas. Maecenas sit amet eros quis nisi porttitor interdum. Praesent semper odio non elit ullamcorper, ut semper magna varius. Ut imperdiet mauris nec sapien accumsan dapibus. Fusce lacinia tristique eros nec pellentesque. Aenean dui massa, rhoncus quis aliquet ut, ultricies non felis. Pellentesque nec gravida libero. Praesent vel consequat ex, vel molestie risus. Fusce non ex congue justo interdum tincidunt in quis tortor. Proin finibus turpis nisl, ut consequat felis elementum vel. Ut lobortis, nisl in suscipit porta, arcu neque gravida sem, ac sagittis nulla lacus et est. Nulla facilisi. Sed et justo est. Maecenas eget tincidunt velit. Aenean porttitor accumsan augue, vitae sodales velit tincidunt quis. Praesent ultricies risus et interdum luctus. Donec auctor vitae ligula ac lobortis. Nulla aliquam sem augue, non facilisis ligula aliquam in. Nullam mollis arcu a felis fringilla, et laoreet tortor lacinia. Vestibulum sed elementum diam. Duis blandit nisl ut quam porta, vel varius est hendrerit. Proin ante est, lobortis a rutrum et, suscipit vitae risus. Sed nisl neque, accumsan vitae odio in, condimentum elementum ante. Proin nec risus eget felis rhoncus mollis in at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porttitor, ipsum id consectetur tincidunt, neque velit consequat enim, sed volutpat nisi nulla id turpis.'
  },
  {
    id: '2',
    title: 'Post title',
    date: 'Nov 11',
    image: ('/blogpic/nbp.jpg'),
    short:
      'This is a first wider card with supporting text below as a natural lead-in to additional content.',
    long1: 
      'Add rice and stir very gently to distribute. Top with artichokes andpeppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.),',
    long2: 
      'Set aside off of the heat to let rest for 10 minutes, and then serve.', 
  },
  {
    id: '3',
    title: 'Post title',
    date: 'Nov 13',
    image: ('/team/aist.jpg'),
    short:
      'This is a second wider card with supporting text below as a natural lead-in to additional content.',
    long1: 
      'Method:',
    long2: 
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Addsaffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
  }
];

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: 'url(backgrounds/long_black_stars.jpg)',
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100%',
  },
  text: {
    paddingTop: '90px',
  },
  box: {
      paddingBottom: '20px',
  },
  title: {
    margin: '0',
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '40px',
    borderBottom: '2px solid rgba(243, 182, 31, 1)',
    borderRadius: '0',
    width: '100px',
    lineHeight: '1.2',
    marginBottom: '30px',
    color: 'rgba(243, 182, 31, 1)',
    '&:hover' : {
      color: 'white',
      borderBottom: '2px solid white',
    }
  },


}));



export default function Blog() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [notes, setNotes] = useState(featuredPosts);
    const [isReloaded, setIsReloaded] = useState(true);
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState();
    const router = useRouter();
    const url_delete = process.env.NEXT_PUBLIC_HOST_URL + "/api/deletePost";
    const url_blogposts = process.env.NEXT_PUBLIC_HOST_URL + "/api/blogposts";

    const handleExpandClick = (index) => {
        expanded === index ? setExpanded(null) : setExpanded(index);
      };

    const handleDeletePost = () => {
        console.log("ID TO DELETE: ", idToDelete)
        const _id = {mid: idToDelete}
        axios.post(url_delete, _id);
        setIsReloaded(!isReloaded);
        handleClose();
        setTimeout(() => {
        router.reload();
        }, 200);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    function getTime(_date) {
        let today = new Date(_date);
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        if (hours < 10) {hours = "0" + hours}
        if (minutes < 10) {minutes = "0" + minutes}
        if (seconds < 10) {seconds = "0" + seconds}
        if (month < 10) {month = "0" + month}

        let time = "Godzina " + hours + ":" + minutes + ", dnia " + day + "." + month + "." + year;
        return time;
    }

  // useEffect(() => {
  //   fetch(url_blogposts).then(res => {
  //     if(res.ok){
  //       return res.json()
  //     }
  //     console.log("JSON" + res.json());
  //   }).then(jsonRes => setNotes(jsonRes))
  //     .catch( function () { setNotes(featuredPosts) })
  // }, [isReloaded]) 

    const handleDelete = async (id) => {
        setOpen(true);
        setIdToDelete(id);
    }

  return (
    <div className="container">
      <div>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Usuwanie posta"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Czy na pewno chcesz usunąć wybrany post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Anuluj
            </Button>
            <Button onClick={handleDeletePost} variant="contained" color="primary">
              Usuń
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={classes.main}>
          <a id="back-to-top-anchor" ></a>
          <Container className={classes.box}>
              <div className={classes.text}>
                  <div className={classes.title}>BLOG</div>
                  <Grid container spacing={4}>
                      {notes.map(post => (
                      <Grid item key={post.title} xs={12} md={6}>
                          <Card elevation={1} >
                            <CardActions disableSpacing>
                              <CardHeader 
                                  title={post.title}
                                  subheader={getTime(post.date)}
                              />
                              <ExpandMore
                                onClick={()=>handleExpandClick(post.id)}
                                aria-expanded={expanded === post.id}
                                aria-label="show more"
                              >
                                <ExpandMoreIcon style={{ fontSize: '50px' }}/>
                              </ExpandMore>
                            </CardActions>
                            <CardMedia
                              component="img"
                              height="194"
                              src={post.image}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" paragraph>
                                {post.short}
                                </Typography>
                            </CardContent>
                            
                            <Collapse in={expanded===post.id} timeout="auto" unmountOnExit>
                              <CardContent>
                                <Typography paragraph>{post.long1}</Typography>
                                <Typography paragraph>{post.long2}</Typography>
                              </CardContent>
                            </Collapse>
                          </Card>
                      </Grid>
                      ))}
                  </Grid>
              </div>
          </Container>
      </div>
    </div>
  )
}
