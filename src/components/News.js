import React from 'react'
import NewsItem from './NewsItem'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            country: 'ru'
        }
        this.getNews = this.getNews.bind(this)
        //this.onChange = this.onChange.bind(this)
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

    // onChange(e) {
    //     const value = e.target.value;
    //     this.setState({
    //         country: value
    //     }, () => this.getNews())
    // }

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
        return (
            <div>
                <h1>News</h1>
                <Select
                    value={this.state.country}
                    onChange={this.onChange}
                >
                    <MenuItem value="ru">Russia</MenuItem>
                    <MenuItem value="ua">Ukrain</MenuItem>
                    <MenuItem value="us">USA</MenuItem>
                </Select>

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


export default News