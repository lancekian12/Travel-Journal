import './App.css'
import Entry from './component/Entry'
import Header from "./component/Header"
// import Joke from './component/Joke'


function App() {

  return (
    <>
      <Header />
      <Entry img={{ src: "https://scrimba.com/links/travel-journal-japan-image-url", alt: "Mount Fuji" }}
        title="Mount Fuji"
        country="Japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text=" Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

      />
      <hr />
      {/* <JokeF
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
      /> */}
    </>
  )
}

export default App
