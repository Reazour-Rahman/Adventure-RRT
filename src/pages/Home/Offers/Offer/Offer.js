import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import bookingIcon from '../../../../images/booking.png';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
const Offer = (props) => {
    const {title, image, _id, desc, cost, flag} = props.place;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="col d-flex justify-content-center">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                        {/* {title.slice(0, 1)} */}
                        <Avatar alt="Remy Sharp" src={flag} />
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader={`5 days combo pack : $${cost}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {`${desc.slice(1, 100)}(collapsed)...`}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Link to={`/offer/${_id}`}>
                        <Tooltip title="Book Now" followCursor>
                            <Box>
                                <IconButton aria-label="add to favorites">
                                    <img style={{width:"30px"}} src={bookingIcon} alt="" />
                                </IconButton>
                            </Box>
                        </Tooltip>
                    </Link>
                    
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        {`${desc.slice(101)}`}
                    </Typography>
                    
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};

export default Offer;
