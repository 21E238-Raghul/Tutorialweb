import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import SideBar from './sidebar';
import NavBar from './navbar';
import Cards from './content';
import Adds from './advertising';
import Footer from './footer';
import Main from './main';
import footer from './footer';
import Users from './display';
import QuizApp from './tasks/quizzes';
import Register from './nextpage/registerpage';

export default function Homepage(){
  // const text="Raghul"
    return(
      <>


        <Main />
      <Footer/>   
      </>
      //   <div>
      // <div className='nav-con'>
      // <NavBar/>
      // <div className='full-side-card'>
      // <div className='full-side'>
      // <SideBar/>
      // </div>

      
      // <div className='full-card'>
        
      //   <div className='only-cards'>
      // <Cards/>
      
      // </div>
      // <div className='adds'>
      // <Adds/>
      // </div>
      // </div>
      // </div>
      // </div>
      // <Footer/>
      //   </div>
    )
}