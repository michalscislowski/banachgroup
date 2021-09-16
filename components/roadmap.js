// import React from 'react';
// import makeStyles from '@mui/styles/makeStyles';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import NewReleasesIcon from '@mui/icons-material/NewReleases';
// import NextWeekIcon from '@mui/icons-material/NextWeek';

// const useStyles = makeStyles((theme) => ({
//   main: {
//     paddingTop: '9vh'
//   },
//   paper: {
//     padding: '6px 16px',
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

// export default function Roadmap() {
//   const classes = useStyles();

//   return (
//     <Timeline align="alternate" className={classes.main}>
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" style={{color: 'white'}}>
//             LUTY 2021
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot style={{color: 'black', backgroundColor: 'white'}}>
//             <NewReleasesIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.paper}>
//             <Typography variant="h6" component="h1">
//               Początek
//             </Typography>
//             <Typography>Usiedliśmy na dupskach i zaczeliśmy pracować</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" style={{color: '#FFFFFC'}}>
//             KWIECIEŃ 2021
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot style={{color: 'black', backgroundColor: '#FFFFFC'}}>
//             <NextWeekIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.paper}>
//             <Typography variant="h6" component="h1">
//               KANTOR
//             </Typography>
//             <Typography>Pierwszy produkt</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }