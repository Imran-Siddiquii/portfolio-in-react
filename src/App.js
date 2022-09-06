import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Blogs from './component/Blogs';
import Error from './component/Error';
import Home from './component/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (<>
    <div className="App">
  {/* <Navbar />   */}
    </div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}  />
      <Route path='/projects' exact element={<Projects/>}  />
      <Route path='/blogs' exact element={<Blogs/>}  />
      <Route path='*' exact element={<Error/>}/>
      

    </Routes>
</Router>
</>

  );
}

export default App;
