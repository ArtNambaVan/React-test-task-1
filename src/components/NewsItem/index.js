import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'

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