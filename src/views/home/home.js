import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { categories } from '../../db/db';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import Close from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import { configs } from '../../configs/configs';

const useStyles = makeStyles((theme) => ({
    root: {
        ...configs.container
    },
    media: {
        height: 140,
    },
    textDescription: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineClamp: 2,
    },
    contCardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    alertCont: {
        marginBottom: 24
    },
    card: {
        '&:hover': {
            boxShadow: '10px 10px 60px -24px rgba(0,0,0,0.65)',
        },
    }
}));

export default function FullWidthGrid(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    className={classes.alertCont}
                    severity="info"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }>
                    Ahora puedes comprar sin moverte de tu casa, proba nuestras delicias.
            </Alert>

            </Collapse>

            <Grid container spacing={3}>
                {
                    categories.map((category, key) => (
                        <Grid key={key} item xs={12} sm={6} md={3}>
                            <Card className={classes.card} onClick={() => {
                                props.setItemCategory(category.items)
                                props.setViews(1)
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={category.image}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {category.name}
                                        </Typography>
                                        <Typography className={classes.textDescription} variant="body2" color="textSecondary" component="p">
                                            {category.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}