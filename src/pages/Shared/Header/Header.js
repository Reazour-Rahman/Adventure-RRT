import { Button, FormControl, FormHelperText, IconButton, Input, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';
import logo from '../../../images/logo1.png'
import './Header.css'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Control from '../../Control/Control';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react';
import { useState } from 'react';



import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import MyBooking from '../../Home/MyBooking/MyBooking';

/* order badge */
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

/* open modal */
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Header = () => {


/* Logout and user */
const {logOut, user} = useAuth();


const [orders, setOrders] = useState([]);

/* Load data */
useEffect(() =>{
    fetch('https://tourism-server-assignment.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
},[orders])


    /* Profile */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    /* Search */
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      /*  */
    const [openmd, setOpenmd] = React.useState(false);

    const handleClickOpen = () => {
        setOpenmd(true);
    };

    const handleClosemd = () => {
        setOpenmd(false);
    };

    /* single order */
     let filtered = [];
     for (const order of orders) {
         const singleOrder = order;
         if (singleOrder.email == user.email) {
            filtered = singleOrder; 
         }
     }
    //  console.log(filtered);

    return (
        <div>
            <nav id="top" class="navbar navbar-expand-lg navbar-light bg-light">
                <div style={{marginLeft:"7px", marginRight:"7px"}} class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img style={{width:"150px"}} src={logo} class="navbar-brand" alt="" />
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                        className="rounded-pill"
                        style={{height:"35px", width:"15em"}}
                            id="outlined-adornment-weight"
                            value={values.weight}
                            onChange={handleChange('weight')}
                            endAdornment={<InputAdornment type="submit" position="end"><i style={{backgroundColor:"#00A041", marginLeft:"207px"}} class="fas fa-search p-2 rounded-circle mb-1 text-white"></i></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                    </FormControl>                     
                    </ul>
                    <form class="d-flex">
                    <Button className="rounded-pill px-3 text-dark" variant="text">Become a host</Button>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                <Button onClick={handleClick} size="small" className="px-3 py-1 border shad rounded-pill" sx={{ ml: 2 }}>
                                    <i class="fas fa-bars text-dark fs-6"></i>&nbsp;&nbsp;
                                    {user.email? <img src={user.photoURL} className="rounded-circle" style={{width:"30px"}} alt="" /> :<i class="fas fa-user-circle text-dark fs-3"></i>}
                                </Button>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                {user.email?<MenuItem style={{paddingLeft:"12px"}}>
                                    <img src={user.photoURL} className="rounded-circle" style={{width:"30px", marginRight:"8px"}} alt="" /> {user.displayName}
                                </MenuItem>:<MenuItem>
                                <Avatar /> Profile
                                </MenuItem>}
                                
                                {/* modal full control */}
                                {user.email?<span>

                                <span variant="outlined" onClick={handleClickOpen}>

                                <MenuItem style={{paddingLeft:"12px"}}>
                                <IconButton className="ps-0" aria-label="cart">
                                <StyledBadge badgeContent={filtered.length} color="secondary" >
                                    <ShoppingCartIcon/>
                                </StyledBadge>
                                </IconButton> <span className="ms-2">My Bookings</span>
                                </MenuItem>

                                </span>

                                <Divider />
                                <Link to='/addNewService' className="text-decoration-none text-dark">
                                    <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add Another Services
                                    </MenuItem>
                                </Link>
                                <Link to='/manageAllOrder' className="text-decoration-none text-dark">
                                    <MenuItem>
                                    <ListItemIcon>
                                    <i class="fas fa-tasks"></i>
                                    </ListItemIcon>
                                    Manage All Bookings
                                    </MenuItem>
                                </Link>
                                <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                                </MenuItem>
                                </span>: ""}

                                {user.email?<MenuItem onClick={logOut}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                                </MenuItem>:<Link className="text-decoration-none" to="/login">
                                    <MenuItem >
                                    <ListItemIcon>
                                    <i fontSize="small" class="fas fa-sign-in-alt"></i>
                                    </ListItemIcon>
                                    Login
                                    </MenuItem>
                                </Link>}
                                
                            </Menu>
                            </React.Fragment>
                    </form>
                    </div>
                </div>
            </nav>
            <Control></Control>


                    {/* My order Modal */}
                    <Dialog
                        fullScreen
                        open={openmd}
                        onClose={handleClosemd}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClosemd}
                            aria-label="close"
                            >
                            <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            My Orders here
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClosemd}>
                            Ok
                            </Button>
                        </Toolbar>
                        </AppBar>
                        <section>
                        <Button className="fs-3 text-success">My Bookings</Button>
                        <Divider />


                        {/* My Order */}
                        {
                         <div>
                                <MyBooking></MyBooking>
                        </div>
                        }




                        </section>
                    </Dialog>


        </div>
    );
};

export default Header;


/* 

<ListItem button>
                                <ListItemText
                                primary={order.name}
                                secondary={order.email}
                                />
                                <ListItemText
                                primary={order.district}
                                secondary={order.thana}
                                />
                                <ListItemText
                                primary={order.number}
                                secondary={order.thana}
                                />
                                <ListItemText
                                primary={order.title}
                                secondary={order.thana}
                                />
                            </ListItem>

*/