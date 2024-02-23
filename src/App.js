import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import { Route,Routes} from "react-router-dom";
import Homepage from './Home';
import  Login  from './nextpage/loginpage';
import  Register from './nextpage/registerpage';
import Component from './reactitems/components';
import Intraction from './reactitems/interactivity';
import State from './reactitems/state';
import Hatches from './reactitems/hatches';
import Videos from './referenceitems/videos';
import Intro from './mongoitems/introduction';
import Crud from './mongoitems/crudoperations';
import Http from './nodeitems/http';
import Clientreq from './nodeitems/clientreq';
import Install from './expressitems/installing';
import Basicroute from './expressitems/basicrouting';
import Contact from './contactus';
import Users from './display';
import QuizApp from './tasks/quizzes';
import Indexes from './mongoitems/indexes';
function App() {
  return (
    <>
    <Routes>
      <Route Component={Homepage} path='/'></Route>  
      <Route Component={Register} path='/register'></Route>
      <Route Component={Component} path='/component'></Route>
      <Route Component={Intraction} path='/intraction'></Route>
      <Route Component={State} path='/state'></Route>
      <Route Component={Hatches} path='/hatches'></Route>
      <Route Component={Videos} path='/videos'></Route>
      <Route Component={Intro} path='/intro'></Route>
      <Route Component={Crud} path='/crud'></Route>
      <Route Component={Http} path='/http'></Route>
      <Route Component={Clientreq} path='/clientreq'></Route>
      <Route Component={Install} path='/install'></Route>
      <Route Component={Basicroute} path='/basicroute'></Route>
      <Route Component={Contact} path='/contact'></Route>
      <Route Component={QuizApp} path='/quizz'></Route>
      <Route Component={Indexes} path='/indexes'></Route>

      {/* <Route element={<Users/>} path='/'></Route> */}
      <Route element={<Login/>} path='/login/'></Route>
      </Routes>
      
      </>
  );
}
export default App;