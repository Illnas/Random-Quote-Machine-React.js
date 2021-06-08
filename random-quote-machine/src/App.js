
function App() {
  return (
    <main  class="container-fluid d-flex flex-column justify-content-center align-items-center" id="quote-box">
            <blockquote class="blockquote text-center p-5">
              <p class="mb-0 text-justify" id="text">Place for quotes</p>
              <footer class="blockquote-footer"><cite title="Author" id="author">Place for author</cite></footer>
              </blockquote>
              <button class="btn" id="new-quote">New Quote</button>
              <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet it!</a>
    </main>
  );
}

export default App;
