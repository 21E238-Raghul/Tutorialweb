import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
function SideBar() {
  const nav=useNavigate();
  return (
    <>
    <Accordion flush alwaysOpen>
      <Accordion.Item  eventKey="0">
        <Accordion.Header  >React</Accordion.Header>
        <Accordion.Body className='react-1' onClick={()=>nav('/component')}>
          Components
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/intraction')}>
          Interactivity
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/state')}>
          Managing State
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/hatches')}>
          Escape hatches
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  eventKey="1">
        <Accordion.Header >Mango DB</Accordion.Header>
        <Accordion.Body className='react-1' onClick={()=>nav('/intro')}>
          Introduction
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/crud')}>
          CRUD Operations
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/indexes')}>
          Indexes
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  eventKey="2">
        <Accordion.Header >Node js</Accordion.Header>
        <Accordion.Body className='react-1' onClick={()=>nav('/http')}>
          HTTP
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/clientreq')}>
          ClientRequest
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  eventKey="3">
        <Accordion.Header >Express Js</Accordion.Header>
        <Accordion.Body className='react-1' onClick={()=>nav('/install')}>
          Installing
        </Accordion.Body>
        <Accordion.Body className='react-1' onClick={()=>nav('/basicroute')}>
          Routing
        </Accordion.Body>
      </Accordion.Item>
    

    <Accordion.Item  eventKey="4">
        <Accordion.Header >Refference</Accordion.Header>
        <Accordion.Body className='react-1' onClick={()=>nav('/videos')}>
          Videos
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  eventKey="5">
        <Accordion.Header >Tasks</Accordion.Header>
        <Accordion.Body className='react-1' onClick={()=>nav('/quizz')}>
          Quizzes
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

    
    </>
  );
}

export default SideBar;