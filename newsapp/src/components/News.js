import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NEWSMonkey`;
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
  
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1617e2ffab854c72934af7552271ae48&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });

  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchData();
    });
  }

  render() {
    return (
      <>
        <h1 className='text-center' style={{ margin: '30px 0px' }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                // Use index as part of the key to ensure uniqueness
                const uniqueKey = element.url + index;
                return (
                  <div className="col-md-4 my-3" key={uniqueKey}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : "No Title"}
                      description={element.description ? element.description.slice(0, 88) : "No Description"}
                      newsUrl={element.url}
                      imageUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
