import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (

      <div><div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{zIndex:'1',left:'83%'}}> {source}</span>
        <img src={!imageUrl ? "https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/06/thumb/featurecrop/400X400/1712374492-0052.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div></div>
    )
  }
}

export default NewsItem