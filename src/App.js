import 'bootstrap/dist/css/bootstrap.min.css';
import './asstes/style/App.css';

import NavBar from './component/NavBar';
import Home from './component/Home';
import Footer from './component/Footer';
import TopBar from './component/TopBar';



function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
