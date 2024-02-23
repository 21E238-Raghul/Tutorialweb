import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
import pic1 from "../images/Screenshot (205).png";
import pic2 from "../images/Screenshot (206).png";
import pic3 from "../images/Screenshot (207).png";
export default function State(){
    const nav=useNavigate();
    return (
        <div className="fulll">
        <div className="navbar-con">
        <NavBar/>
        </div>
        <div className="flexing">
        <div className="sidebar-container">
        <SideBar/>
         </div>
         <div className="big-content">
        <h2>Reacting to Input with State</h2><br></br>
        <h5><i>React provides a declarative way to manipulate the UI. Instead of manipulating individual pieces of the UI directly, you describe the different states that your component can be in, and switch between them in response to the user input. 
            This is similar to how designers think about the UI.</i></h5><br></br>
        <h2>Step 1: Identify your component's different visual states </h2><br></br>
        In computer science, you may hear about a “state machine” being in one of several “states”. If you work with a designer, you may have seen mockups for different “visual states”. React stands at the intersection of design and computer science,
         so both of these ideas are sources of inspiration.<br></br><br></br>
         First, you need to visualize all the different “states” of the UI the user might see:<br></br><br></br>
         <li>Empty: Form has a disabled “Submit” button.</li>
         <li>Typing: Form has an enabled “Submit” button.</li>
         <li>Submitting: Form is completely disabled. Spinner is shown.</li>
         <li>Success: “Thank you” message is shown instead of a form.</li>
         <li>Error: Same as Typing state, but with an extra error message.</li><br></br>
         Just like a designer, you'll want to “mock up” or create “mocks” for the different states before you add logic. For example, here is a mock for just the visual part of the form. 
         This mock is controlled by a prop called status with a default value of 'empty':
        <img src={pic1} alt="react-1" className="r-img-1"></img><br></br><br></br>
        <h2>Step 2: Determine what triggers those state changes</h2><br></br>
        <li>Human inputs, like clicking a button, typing in a field, navigating a link.</li>
        <li>Computer inputs, like a network response arriving, a timeout completing, an image loading.</li><br></br>
        In both cases, you must set state variables to update the UI. For the form you're developing, you will need to change state in response to a few different inputs:<br></br><br></br>
        <li>Changing the text input (human) should switch it from the Empty state to the Typing state or back, depending on whether the text box is empty or not.</li>
        <li>Clicking the Submit button (human) should switch it to the Submitting state.</li>
        <li>Successful network response (computer) should switch it to the Success state.</li>
        <li>Failed network response (computer) should switch it to the Error state with the matching error message.</li><br></br>
        <h2>Step 3: Represent the state in memory with useState</h2><br></br>
        Next you'll need to represent the visual states of your component in memory with useState. Simplicity is key: each piece of state is a “moving piece”, and <b>you want as few “moving pieces” as possible.</b> More complexity leads to more bugs!<br></br>
        Start with the state that absolutely must be there. For example, you'll need to store the answer for the input, and the error (if it exists) to store the last error:<br></br>
        <img src={pic2} alt="react-1" className="r-img-1"></img><br></br><br></br>
        Then, you'll need a state variable representing which one of the visual states that you want to display. There's usually more than a single way to represent that in memory, so you'll need to experiment with it.<br></br>
        If you struggle to think of the best way immediately, start by adding enough state that you're definitely sure that all the possible visual states are covered:<br></br><br></br>
        <img src={pic3} alt="react-1" className="r-img-1"></img><br></br><br></br>
        <h2>Recap</h2><br></br>
        <li>Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).</li>
        <li>When developing a component:</li><br></br>
        <ol>
            <li>Identify all its visual states.</li>
            <li>Determine the human and computer triggers for state changes.
            <li>Model the state with useState.</li>
            <li>Remove non-essential state to avoid bugs and paradoxes.</li>
            <li>Connect the event handlers to set state.</li>
            </li>
        </ol>
        <div className="nxt-prev">
<button className="r-prev-but" onClick={()=>nav('/intraction')}><b>Previous</b></button>
<button className="r-next-but" onClick={()=>nav('/hatches')}><b>Next </b></button>
</div>
        
    </div>
    </div>
    </div>
   
    
      

    )
}