import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles=[]

  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false
    }
  }

  static propTypes = {}

  // generateRandomNumber = () =>{
  //   return Math.floor(Math.random()*1000)
  // }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-14&sortBy=publishedAt&apiKey=6b0aa568639a493f824c42ce22fb9229";
    let data = await (await fetch(url)).json()
    //console.log(data)
    this.setState({articles:data.articles})
    console.log(this.state.articles)
  }
  render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
              <h2>Headlines</h2>
              {this.state.articles.map((ele)=>{
                return <div className='col-4 mt-4' key={ele.url}>
                <NewsItem title ={ele.title?ele.title:"..."} description ={ele.description?ele.description:"..."} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
                </div>
              })}
            </div>
        </div>
      </div>
    )
  }
}

export default News