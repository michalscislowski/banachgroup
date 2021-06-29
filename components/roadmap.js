import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import NextWeekIcon from '@material-ui/icons/NextWeek';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '9vh'
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Roadmap() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" className={classes.main}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: 'white'}}>
            LUTY 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color: 'black', backgroundColor: 'white'}}>
            <NewReleasesIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Początek
            </Typography>
            <Typography>Usiedliśmy na dupskach i zaczeliśmy pracować</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: 'white'}}>
            KWIECIEŃ 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color: 'black', backgroundColor: 'white'}}>
            <NextWeekIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              KANTOR
            </Typography>
            <Typography>Pierwszy produkt</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}