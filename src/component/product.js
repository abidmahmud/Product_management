import * as React from 'react';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Product = (props) => {
    const { title, category, image, description, rating, price, } = props;
    return (
        <>
            <div className="card" style={{ display: "flex", justifyContent: "center" }} >
                <Card sx={{ maxWidth: 450 }} style={{ marginBottom: "20px" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                P
                            </Avatar>
                        }
                        title={title}
                        subheader={category}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt="Product Image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <span>Rating: {rating.rate}</span>
                        <span> Count: {rating.count}</span>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

export default Product;
