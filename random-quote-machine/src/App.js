import { useState } from "react";
import { useEffect } from "react";
const fetchURL = "https://type.fit/api/quotes";



function App() {
  const [data, setData] = useState();
  const [author, setAuthor] = useState('Place for Author');
  const [text, setText] = useState('Place for quote');

  const getData = () =>
    fetch(fetchURL).then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  function onClick() {
    let rng = Math.floor(Math.random() * 1643);
    //console.log(rng)
    //console.log(data)
    setAuthor(data[rng].author);
    setText(data[rng].text);

  }

  return (
    <main className="container" id="quote-box">
      <div className="quote-container">
      <p id="text">{text}</p>
      <cite id="author">'{author !== null ? author : "Author Unknown"}'</cite>
      </div>
      <button className="btn" id="new-quote" onClick = {onClick}>
        New Quote
      </button>
      <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
        Tweet this quote
      </a>
    </main>
  );
}

export default App;
