import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        color: '#707070'
    }
}));

export default function FullWidthGrid(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title} gutterBottom variant="h4" component="h2">
            {props.title}
        </Typography>
    );
}