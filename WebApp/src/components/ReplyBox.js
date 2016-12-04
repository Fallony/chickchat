import React, {PropTypes} from "react"
import {connect} from "react-redux"

import attachImage from "src/util/attachImage"

export class ReplyBox extends React.Component {
    onAttachImage = attachImage.bind(this)

    state = {
        text: ""
    }

    updateText = (e) => {
        this.setState({text: e.target.value})
    }

    sendReply = () => {
        this.props.replyText(this.state.text)
        this.setState({text: ""})
    }

    sendImage = () => {
      this.props.replyText(this.state.text)
      this.setState({text: ""})
    }
    render () {
        return (
            <div>

                {/* Exercise 2: Render a text input and a button */}

                <input value={this.state.text} onChange={this.updateText} />

                />
                <button onClick={this.sendReply} disabled={this.state.text===""}>Send</button>


                <input type="file" onChange={this.onAttachImage} />
                <button onClick={this.sendImage}Upload image</button>
            </div>

        )
    }
}

ReplyBox.propTypes = {
    replyImage: PropTypes.func,
    replyText: PropTypes.func
}

export default connect(undefined, {
    replyText: (text) => ({
        type: "REPLY",
        apiEndpoint: "chatPOST",
        payload: {text}
    }),
    replyImage: (data) => ({
        type: "REPLY",
        apiEndpoint: "chatPOST",
        payload: {data}
    })
})(ReplyBox)
