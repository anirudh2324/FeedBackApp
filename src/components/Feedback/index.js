import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  setIsFeedbackSelected = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="feed-question-container">
        <div className="heading-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-container">
            {emojis.map(emoji => (
              <li
                key={emoji.id}
                className=" list-container"
                onClick={this.setIsFeedbackSelected}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
                <p className="emoji-name">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderAnswer = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="feedback-summary-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="img" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="container">
        <div className="card-container">
          {isFeedbackSelected
            ? this.renderAnswer()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
