import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Footer from './component/Footer';
import Projects from './component/Projects';
import Blogs from './component/Blogs';
import Error from './component/Error';
import Home from './component/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import EmojiInterpreter from './component/projects/EmojiInterpreter';
import Recommendation from './component/projects/Recommendation';
import Ubbidubbi from './component/projects/Ubbidubbi';

function App() {
  return (<>
    <div className="App">
    </div>
    <Router>
  <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}  />
      <Route path='/projects' exact element={<Projects/>}/>
      <Route path='/projects/ubbi-dubbi-translate' exact element={<Ubbidubbi/>}/>
      <Route path='/projects/emoji-interpreter' exact element={<EmojiInterpreter/>}/>
      <Route path='/projects/recommendation' exact element={<Recommendation/>}/>
      <Route path='/blogs' exact element={<Blogs/>}  />
      <Route path='*' exact element={<Error/>}/>
    </Routes>
    <Footer/>      
</Router>

</>);
}
export default App;
