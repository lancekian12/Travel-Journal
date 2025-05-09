import React from 'react'

const Joke = (props) => {
    return (
        <>
            {props.setup && <p className='setup'>Setup: {props.setup}</p>}
            {<p style={{ display: props.setup ? "block" : "none" }} className='punchline'>{props.punchline}</p>}
            {props.setup && props.punchline && <hr />}
        </>
    )
}

export default Joke