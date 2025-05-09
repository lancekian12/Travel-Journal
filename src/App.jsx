import './App.css'
import Entry from './component/Entry'
import Header from "./component/Header"
import Joke from './component/Joke'


function App() {

  return (
    <>
      <Header />
      <Entry />
      <hr />
      <Joke
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
        upVotes={10}
        isPun={true}
        comments={[
          { author: "", text: "", title: "" },
          { author: "", text: "", title: "" }
        ]}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
      />
    </>
  )
}

export default App
