import logo from './logo.svg';
import './Style.css';
import Imgsrc from "./imageInSrc.jpg"

function App() {
  return (
  <div>
    <div className="App" style={{border:"solid 1px black",maxwidth:"100vw"}}>
     {/* whenClicked is a property not an event, per se. */}
    <h1 className="title red">Harizi Wafa</h1>
    <br/>
    <img src="/imageInPublic.jpg"  className="imhp"></img>
    <br/>
    <img src={Imgsrc} ></img>
   
    </div>

  

<video width="500" height="500" controls>

 <source src="/myVideo.mp4" type="video/mp4" ></source>

</video>



    </div>
  );
}

export default App;
