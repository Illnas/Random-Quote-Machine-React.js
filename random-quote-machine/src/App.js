import Quote from "./assets/components/Quote"
import Author from "./assets/components/Author"
import Rng from "./assets/components/Rng"




function App() {
  return (
    <main  className="container" id="quote-box">
      <blockquote>
          <Quote />
          <Author />
      </blockquote>
          
          <Rng />
    </main>
  );
}

export default App;
