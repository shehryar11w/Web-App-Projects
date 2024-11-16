import React, { Component } from 'react';
import NewsItem from './NewsItem';
export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=07d6d74e234441dab4ca1f9931da4f74"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.articles);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className='container-my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className='row'>
            {this.state.articles.map((el) => {
                return <div className='col-md-4' key={el.url} >
                <NewsItem title = {el.title?el.title.length>45?el.title.slice(0,55)+"...":el.title:""} description = {el.description?el.description.length>88?el.description.slice(0,88)+"...":el.description:""} imageUrl={el.urlToImage} newsUrl = {el.url}/>
                </div>
            })}
        </div>
        </div>
    );
  }
}

export default News;
