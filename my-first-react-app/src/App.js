import Container from './components/Container/Container.js'
import NavBar from './components/NavBar/NavBar.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';


const App = () => {

  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <Favorite />
        <About />
      </Container>
    </main>    
  );
};

export default App;