
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainTitle from '../../components/mainTitles/mainTitles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Share from '@material-ui/icons/Share';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Close from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import { configs } from '../../configs/configs';

const useStyles = makeStyles((theme) => ({
    root: {
        ...configs.container
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: 15
    },
    media: {
        height: 160,
    },
    conts: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    contActions: {
        position: 'relative',
    },
    button: {
        backgroundColor: configs.colors.secondaryLigth,
        color: configs.colors.secondary,
        '&:hover': {
            backgroundColor: configs.colors.secondaryDark,
        },
        position: 'absolute',
        right: 20,
        bottom: 13
    },
    textField: {
        width: '100%',
        position: 'relative'
    },
    textStart: {
        marginLeft: 10
    },
    divider: {
        marginBottom: 10
    },
    icon: {
        color: '#707070'
    },
    textTotal: {
        color: configs.colors.secondary,
        marginBottom: 24
    }
}));


export default function InteractiveList(props) {
    const classes = useStyles();
    const [itemCategory, setItemCategory] = React.useState([]);
    const [valueStart, setValueStart] = React.useState(4);
    const [values, setValues] = React.useState({});
    const [openAlertError, setOpenAlertError] = React.useState(false);
    const [openAlertBuy, setOpenAlertBuy] = React.useState(false);
    const [totalBuy, setTotalBuy] = React.useState(0);

    useEffect(() => {
        setItemCategory(props.itemCategory)
        totalPriceOfAddedItems(props.itemsAddedToCart)
    }, [props]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlertError(false);
        setOpenAlertBuy(false)
    };

    const addCategoryItemToCart = (prop, value) => {
        const addItem = prop
        addItem['value'] = value
        addItem['total'] = ''

        let total = ''
        if ((!isNaN(parseFloat(value)) && ((prop.weight === 'gramo' && value >= 250) || (prop.weight === 'unidad' && value >= 1)))) {
            if (prop.weight === 'gramo') {
                total = prop.price * value / 1000
            } else if (prop.weight === 'unidad') {
                total = prop.price * value
            }
            addItem.total = total

            props.setAddedToCart(items => [...items, addItem])
            setValues({ ...values, [prop.id]: '' });
            setOpenAlertBuy(true)
        } else {
            setOpenAlertError(true)
        }
    };

    const totalPriceOfAddedItems = (itemsAddedToCart) => {
        if (itemsAddedToCart.length > 0) {
            const total = itemsAddedToCart.reduce((sum, value) => {
                return sum + value.total
            }, 0.0)
            setTotalBuy(total)
        }
    }

    return (
        <div className={classes.root}>
            <MainTitle title={props.categoryName}></MainTitle>

            <Snackbar open={openAlertError} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    variant="filled"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }>
                    Debe ser un número mayor o igual a 250 (gramos) o mayor o igual a uno (unidad)
                </Alert>
            </Snackbar>

            <Snackbar open={openAlertBuy} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                    variant="filled"
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }>
                    <div onClick={() => props.setViews(2)}>Se han cargado {props.itemsAddedToCart.length} producto/s al carrito. Total ${totalBuy.toFixed(2)}</div>
                </Alert>
            </Snackbar>

            <Fade in={totalBuy > 0 ? true : false} mountOnEnter unmountOnExit>
                <div className={classes.conts}>
                    <div className={classes.conts}>
                        <Typography className={classes.textTotal}>Se han cargado {props.itemsAddedToCart.length} producto/s al carrito. Total ${totalBuy.toFixed(2)}</Typography>
                    </div>
                </div>
            </Fade>


            <Grid container spacing={3}>
                {
                    itemCategory.map((product, key) => (
                        <Grid key={key} item xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <div className={classes.conts}>
                                        <div className={classes.conts}>
                                            <Rating
                                                size="small"
                                                name="simple-controlled"
                                                value={valueStart}
                                                onChange={(event, newValue) => {
                                                    setValueStart(newValue);
                                                }}
                                            />
                                            <Typography className={classes.textStart} variant="body2" color="textSecondary" component="p">4.5 (413)</Typography>
                                        </div>
                                        <IconButton edge="end" aria-label="delete">
                                            <Share fontSize="small" />
                                        </IconButton>
                                    </div>

                                    <Divider className={classes.divider}></Divider>

                                    <Typography>
                                        {"$" + product.price + " x " + product.weight}
                                    </Typography>

                                    <Typography className={classes.textDescription} variant="body2" color="textSecondary" component="p">
                                        {product.weight === 'gramo' ? 'Minimo 250g.' : 'Nuestras delicias'}
                                    </Typography>


                                </CardContent>
                                <CardActions className={classes.contActions}>
                                    <TextField
                                        className={classes.textField}
                                        size="small"
                                        value={values[product.id]}
                                        onChange={handleChange(product.id)}
                                        id={product.id}
                                        label={product.weight === 'gramo' ? 'Cantidad (gramos)' : 'Cantidad (unidad)'}
                                        variant="outlined"
                                    />
                                    <Button type="submit" size="small" className={classes.button} onClick={() => addCategoryItemToCart(product, values[product.id])}>
                                        Agregar
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div >
    );
}