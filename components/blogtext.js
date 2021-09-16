import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nunc a ante faucibus fermentum et a lorem. Sed efficitur non enim et laoreet. Suspendisse potenti. Phasellus non augue sed arcu maximus lobortis. Maecenas felis est, tempor quis tempor nec, congue sed massa. Proin sed molestie massa. Aenean eros nulla, placerat ac justo nec, consectetur consequat justo. Donec ornare molestie posuere. Phasellus non sollicitudin risus. Integer faucibus elit convallis metus imperdiet, a sodales nisi molestie. Nam ac ex sodales, faucibus mi quis, scelerisque nibh. Nulla tempus massa eros, vitae euismod nunc posuere sed. Pellentesque non fringilla lorem. Aenean placerat, justo a ornare consectetur, ligula mauris tempor elit, quis posuere risus tellus eget tellus. Maecenas quam elit, eleifend ut metus pharetra, vulputate venenatis lectus. Vivamus posuere, eros id porta tincidunt, tortor orci accumsan diam, nec varius nibh purus lacinia sem. Etiam faucibus augue sit amet varius accumsan. Pellentesque eget felis sit amet diam lobortis ullamcorper feugiat pretium tellus. Vivamus sodales justo eu venenatis venenatis. Pellentesque id diam orci. Donec euismod vehicula libero eu pulvinar. Mauris finibus ex sit amet diam condimentum egestas. Maecenas sit amet eros quis nisi porttitor interdum. Praesent semper odio non elit ullamcorper, ut semper magna varius. Ut imperdiet mauris nec sapien accumsan dapibus. Fusce lacinia tristique eros nec pellentesque. Aenean dui massa, rhoncus quis aliquet ut, ultricies non felis. Pellentesque nec gravida libero. Praesent vel consequat ex, vel molestie risus. Fusce non ex congue justo interdum tincidunt in quis tortor. Proin finibus turpis nisl, ut consequat felis elementum vel. Ut lobortis, nisl in suscipit porta, arcu neque gravida sem, ac sagittis nulla lacus et est. Nulla facilisi. Sed et justo est. Maecenas eget tincidunt velit. Aenean porttitor accumsan augue, vitae sodales velit tincidunt quis. Praesent ultricies risus et interdum luctus. Donec auctor vitae ligula ac lobortis. Nulla aliquam sem augue, non facilisis ligula aliquam in. Nullam mollis arcu a felis fringilla, et laoreet tortor lacinia. Vestibulum sed elementum diam. Duis blandit nisl ut quam porta, vel varius est hendrerit. Proin ante est, lobortis a rutrum et, suscipit vitae risus. Sed nisl neque, accumsan vitae odio in, condimentum elementum ante. Proin nec risus eget felis rhoncus mollis in at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porttitor, ipsum id consectetur tincidunt, neque velit consequat enim, sed volutpat nisi nulla id turpis.'
//   },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Post title',
    date: 'Nov 13',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
];



export default function Blog() {
    const [expanded, setExpanded] = React.useState(false);
    const [notes, setNotes] = useState(featuredPosts);
    const [isReloaded, setIsReloaded] = useState(true);
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState();
    const router = useRouter();
    const url_delete = process.env.NEXT_PUBLIC_HOST_URL + "/api/deletePost";
    const url_blogposts = process.env.NEXT_PUBLIC_HOST_URL + "/api/blogposts";

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
    <div className="main">
        <a id="back-to-top-anchor" ></a>
        <Container >
            <div className="text">
                <p>BLOG</p>
                <Grid container spacing={4}>
                    {notes.map(post => (
                    <Grid item key={post.title} xs={12} md={6}>
                        <Card elevation={1}>
                        <CardHeader 
                            title={post.title}
                            subheader={getTime(post.date)}
                        />
                        <CardContent>
                            <Typography variant="subtitle1" paragraph>
                            {post.description}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    </div>
      <style jsx> {`
        .main {
            background-image: url('long_black_stars.jpg');
            background-size: cover;
            min-height: 100vh;
            width: 100%;
        }
        .text {
            padding-top: 90px;
        }
        p {
            font-size: 30px;
            margin: 0;
            font-family: 'Titillium Web';
            font-weight: '900';
            font-size: '20px';
        }
      `} </style>
    </div>
  )
}
