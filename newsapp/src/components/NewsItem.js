import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl} = this.props
    return (
        <>
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
        </>
      
    )
  }
}

export default NewsItem

