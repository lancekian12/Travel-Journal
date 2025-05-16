import React from 'react'

const Joke = (props) => {
    const [isShown, setIsShown] = React.useState(false)
    // const [unreadMessages] = React.useState(["ab"])


    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
            {/* <div>
                {unreadMessages.length > 0 && <h1>You have _ unread messages!</h1>}
            </div> */}
        </div>

    )
}

export default Joke