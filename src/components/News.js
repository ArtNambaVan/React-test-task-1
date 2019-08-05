import React from 'react'
import NewsItem from './NewsItem/index'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    select: {
        marginLeft: 10
    },
    title: {
        marginBottom: 16
    }
}

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            country: 'ru'
        }
        this.getNews = this.getNews.bind(this)
    }

     async getNews() {
        const country = this.state.country;
        const API_KEY = 'db1a58573f9c448abcf8688b05a14ccd';
		try {
			const api_call = 
			await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`);
            const data = await api_call.json();
            this.setState({
                news: data.articles
            })
		} catch(err) {
            console.log(err)
		}
	}

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            country: value
        }, () => this.getNews())
    }

    async componentDidMount() {
        this.getNews()
    }
  
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography component="h2" variant="h5" align="center" className={classes.title}>
                    News in 
                    <Select
                        value={this.state.country}
                        onChange={this.onChange}
                        className={classes.select}
                    >
                        <MenuItem value="ru">Russia</MenuItem>
                        <MenuItem value="ua">Ukrain</MenuItem>
                        <MenuItem value="us">USA</MenuItem>
                    </Select>
                </Typography>
                <Grid container spacing={4}>
                    { this.state.news.map((news, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                            <NewsItem
                                author={news.author} 
                                title={news.title} 
                                desc={news.description} 
                                url={news.url}
                                urlToImage={news.urlToImage}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(News)