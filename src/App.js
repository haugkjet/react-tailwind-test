import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';
import MiddleArea from './components/MiddleArea';
import Footer from './components/Footer';


function App() {
 

    return (

    <div className="App flex">
      <div>

        <TopBar></TopBar>
        <MiddleArea></MiddleArea>
        <Footer></Footer>

      </div>
     

    </div>
  );
}

export default App;
