import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function NewsItem(props) {

  return (
    <Card>
        { props.urlToImage && 
        <CardMedia style={{height: 0, paddingTop: '56.25%'}}
            image={props.urlToImage}
            title="Contemplative Reptile"
        /> }
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.desc}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" href={props.url} target="_blank">More Info</Button>
        </CardActions>
    </Card>
  );
}