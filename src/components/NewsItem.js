
import React, { Component } from 'react'

export class NewsItem extends Component {

    

    render() {
        let {title, description, imageUrl, newsUrl,author,date,source}= this.props;
        return (
            <div className="my-3">
               <div className="card">
               <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
   {source}
    
  </span>
  <img src={!imageUrl?"https://images.indianexpress.com/2021/11/Data-protection-759-1.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="norefferer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
