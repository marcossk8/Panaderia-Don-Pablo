
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import Chip from '@material-ui/core/Chip';
import Alert from '@material-ui/lab/Alert';
import Close from '@material-ui/icons/Close';
import {configs} from '../../configs/configs';

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
    contActionsOne: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    contActionsTwo: {
        position: 'relative',
    },
    button: {
        position: 'absolute',
        right: 20,
        bottom: 13
    },
    buttonLarge: {
        width: '100%',
        backgroundColor: configs.colors.secondaryLigth,
        color: configs.colors.secondary,
        '&:hover': {
            backgroundColor: configs.colors.secondaryDark,
        },
        marginTop: 15
    },
    buttonLargeMore: {
        width: '100%',
        color: configs.colors.secondary,
        border: '1px solid'+`${configs.colors.secondary}`,
        '&:hover': {
            backgroundColor: 'rgba(232, 244, 253, 0.5)',
        },
    },
    textField: {
        width: '100%',
        position: 'relative'
    },
    textStart: {
        marginLeft: 10
    },
    divider: {
        marginBottom: 10,
        marginTop: 10
    },
    icon: {
        color: '#707070'
    },
    textTotal: {
        color: configs.colors.secondary,
    },
    textFieldMultiline: {
        width: '100%',
        marginBottom: 15,
        marginTop: 15
    },
    contChips: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    chips: {
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    },
    cardSticky: {
        position: 'sticky',
        top: 24,
    }
}));


export default function InteractiveList(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({});
    const [openAlertError, setOpenAlertError] = React.useState(false);
    const [openAlertBuy, setOpenAlertBuy] = React.useState(false);
    const [totalBuy, setTotalBuy] = React.useState(0);

    useEffect(() => {
        totalPriceOfAddedItems(props.itemsAddedToCart)
        if (props.itemsAddedToCart.length === 0) {
            props.setViews(0)
        }
    }, [props.itemsAddedToCart]);

    const handleChange = (prop) => (event) => {
        if (event.target.value !== '') {
            setValues({ ...values, [prop]: event.target.value });
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlertError(false);
        setOpenAlertBuy(false)
    };

    const addCategoryItemToCart = (prop, value, index) => {
        if ((!isNaN(parseFloat(value)) && ((prop.weight === 'gramo' && value >= 250) || (prop.weight === 'unidad' && value >= 1)))) {
            const addItem = prop
            addItem['value'] = value
            addItem['total'] = ''
            let total = ''

            if (prop.weight === 'gramo') {
                total = prop.price * value / 1000
            } else if (prop.weight === 'unidad') {
                total = prop.price * value
            }
            addItem.total = total

            props.setAddedToCart(items => items.map((item, key) => {
                if (key === index) item.total = total
                return item
            }))

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

    const deleteCategoryItemToCart = (index) => {
        props.setAddedToCart(items => items.filter((item, key) => key !== index))
    }

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>
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
                    Se ha modificado correctamente el producto.
                </Alert>
            </Snackbar>

            <Grid
                container
                justify="space-between" spacing={1}>
                <Grid container xs={12} sm={6} spacing={2}>
                    {
                        props.itemsAddedToCart.map((product, key) => (
                            <Grid key={key} item xs={12} sm={12} md={6}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <div gutterBottom className={classes.contActionsOne}>
                                            <Typography variant="h6" component="h2">
                                                {product.name}
                                            </Typography>
                                            <IconButton onClick={() => deleteCategoryItemToCart(key)} edge="end">
                                                <Close className={classes.icon} />
                                            </IconButton>
                                        </div>

                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {"$" + product.price + " x " + product.weight}
                                        </Typography>

                                        <Divider className={classes.divider}></Divider>

                                        <div className={classes.contActionsOne}>
                                            <Typography className={classes.icon}>
                                                {product.value} {product.weight === 'gramo' ? 'grs.' : 'un.'}
                                            </Typography>
                                            <Typography>
                                                Total {"$" + product.total}
                                            </Typography>
                                        </div>

                                    </CardContent>

                                    <CardActions className={classes.contActionsTwo}>
                                        <TextField
                                            className={classes.textField}
                                            size="small"
                                            value={values[product.id]}
                                            onChange={handleChange(product.id)}
                                            id={product.id}
                                            label={product.weight === 'gramo' ? 'Cantidad (gramos)' : 'Cantidad (unidad)'}
                                            variant="outlined"
                                        />
                                        <Button variant="outlined" color="secondary" size="small" className={classes.button} onClick={() => addCategoryItemToCart(product, values[product.id], key)}>
                                            Modificar
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                        )}
                </Grid>
                <Grid container xs={12} sm={6} spacing={2}>
                    <Grid item md={12}>
                        <Card className={classes.cardSticky}>
                            <CardContent>
                                <div className={classes.contActionsOne}>
                                    <Typography className={classes.icon} gutterBottom variant="h6" component="h2">
                                        Mi pedido
                                </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.textTotal}>
                                        Total ${totalBuy.toFixed(2)}
                                    </Typography>
                                </div>


                                <Typography className={classes.icon}>
                                    Dirección
                                </Typography>
                                <div className={classes.contActionsOne}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Av. Rafael Nuñez 3200. Córdoba, Argentina.
                                    </Typography>
                                    <Button color="secondary" size="small">
                                        Modificar
                                    </Button>
                                </div>

                                <Divider className={classes.divider}></Divider>

                                <div className={classes.contActionsOne}>
                                    <Typography className={classes.icon}>
                                        Seleccionar metodo de pago
                                    </Typography>
                                    <Button color="secondary" size="small">
                                        Dividir pago
                                    </Button>
                                </div>

                                <div className={classes.contChips}>
                                    <Chip className={classes.chips} label="Efectivo" variant="outlined" onClick={handleClick} />
                                    <Chip className={classes.chips} label="Tarjeta de credito" variant="outlined" onClick={handleClick} />
                                    <Chip className={classes.chips} label="Tarjeta de debito" variant="outlined" onClick={handleClick} />
                                    <Chip className={classes.chips} label="Mercado pago" variant="outlined" onClick={handleClick} />
                                </div>

                                <TextField
                                    className={classes.textFieldMultiline}
                                    id="outlined-multiline-static"
                                    label="Desea agregar un comentario?"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                                <Button size="large" variant="outlined" className={classes.buttonLargeMore} onClick={() => props.setViews(0)}>
                                    Agregar más productos
                                </Button>

                                <Button size="large" className={classes.buttonLarge} onClick={() => console.log('')}>
                                    Comprar
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}