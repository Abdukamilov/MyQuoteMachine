import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);

    const stateQuote = this.items[Math.floor(Math.random() * this.items.length)].quote;
    const stateAuthor = this.items.find((obj) => obj.quote === stateQuote).author;

    this.state = {
      quote: stateQuote,
      author: stateAuthor,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
  }

  items = [
    { quote: 'Life is about making an impact, not making an income', author: 'Kevin Kruse' },
    { quote: 'Strive not to be a success, but rather to be of value', author: 'Albert Einstein' },
    { quote: 'You miss 100% of the shots you don’t take', author: 'Wayne Gretzky' },
    { quote: 'Every strike brings me closer to the next home run', author: 'Babe Ruth' },
    { quote: 'The mind is everything. What you think you become', author: 'Buddha' },
    { quote: 'Eighty percent of success is showing up', author: 'Woody Allen' },
    { quote: 'Winning isn’t everything, but wanting to win is', author: 'Vince Lombardi' },
    { quote: 'Either you run the day, or the day runs you', author: 'Jim Rohn' },
    { quote: 'Whether you think you can or you think you can’t, you’re right', author: 'Henry Ford' },
    { quote: 'Life shrinks or expands in proportion to one\'s courage', author: 'Anais Nin' },
    { quote: 'Believe you can and you’re halfway there', author: 'Theodore Roosevelt' },
    { quote: 'Everything you’ve ever wanted is on the other side of fear', author: 'George Addair' },
    { quote: 'Start where you are. Use what you have.  Do what you can', author: 'Arthur Ashe' },
    { quote: 'Fall seven times and stand up eight', author: 'Japanese Proverb' },
    { quote: 'Everything has beauty, but not everyone can see', author: 'Confucius' }
  ]

  newQuote = () => {
    const stateQuote = this.items[Math.floor(Math.random() * this.items.length)].quote;
    const stateAuthor = this.items.find((obj) => obj.quote === stateQuote).author;
    this.setState({
      quote: stateQuote,
      author: stateAuthor,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    })
  }

  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div>
        <div className="container d-flex flex-column min-vh-100 justify-content-center">
          <div className="row">
            <div className="container-fluid bg-white align-middle col-sm-7" id="quote-box" style={{ color: this.state.color }}>
              <div className="text-center" id="text">
                <h1>{this.state.quote}</h1>
              </div>
              <div className="text-right align-items-center" id="author">
                <h4>- {this.state.author}</h4>
              </div>
              <div className="wrapper flex-grow-1">
                <div className="d-flex float-left" >
                  <a id="tweet-quote" target="_top" href={`https:\\twitter.com/intent/tweet?text=%22${this.state.quote}%2E%22%20${this.state.author}%20%23quote`}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="float-right">
                  <button type="button" className="btn btn-outline-primary" id="new-quote" onClick={this.newQuote} >New Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));