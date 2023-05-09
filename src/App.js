import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {search: '', list: []}

  onChangeSearch = event => {
    const {search} = this.state
    this.setState({search: event.target.value})
    console.log(search)
  }

  onClickButton = event => {
    event.preventDefault()
    const {search, list} = this.state
    this.setState(prevState => ({
      list: [...prevState.list, search],
      search: '',
    }))
    console.log(list)
  }

  render() {
    const {list, search} = this.state
    return (
      <div className="bg-container">
        <div className="left-container">
          <h1>
            Count the characters like a <br />
            Boss...
          </h1>
          {list.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt=" no user inputs"
            />
          ) : (
            <ul>
              {list.map(item => (
                <li className="list" key={uuidv4()}>
                  <p>
                    {item}:{item.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="right-container">
          <h1>Character Counter</h1>
          <form>
            <input
              type="text"
              placeholder="   Enter the characters here"
              onChange={this.onChangeSearch}
              value={search}
            />
            <button type="submit" onClick={this.onClickButton}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
