import React from 'react'

const Joke = (props) => {
    const [isShown, setIsShown] = React.useState(false)
    // const [unreadMessages] = React.useState(["ab"])
    const [messages] = React.useState(["a", "b"])


    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
            <div>
                <h1>{determineText()}</h1>
            </div>
        </div>

    )
}

export default Joke