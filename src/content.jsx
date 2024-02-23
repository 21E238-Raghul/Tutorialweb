import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Cards() {
  const nav=useNavigate();
  return (
    <>
    <div className='card-full'>

    <Card className='card-con' style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4923981.jpg" />
      <Card.Body>
        <Card.Title>React JS</Card.Title>
        <Card.Text>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        </Card.Text>
        </Card.Body>
        <Button onClick={()=>nav('/component')} className='but-1'>Explore</Button>
      
    </Card>

<Card className='card-con' style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://banner2.cleanpng.com/20180905/pq/kisspng-mongodb-database-clip-art-computer-icons-nosql-5b900df99c65f2.2387663615361674176406.jpg" />
<Card.Body>
  <Card.Title>Mango DB</Card.Title>
  <Card.Text>
  MongoDB Atlas' document model enables developers to store data as JSON-like objects that resemble objects in application code. With MongoDB Atlas, use the tools and languages that you prefer. 
  Manage your clusters with MongoDB CLI for Atlas, or IaC tools like Terraform or Cloudformation.
  </Card.Text>
  </Card.Body>
  <Button className='but-1'>Explore</Button>

</Card>

<Card className='card-con' style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?cs=srgb&dl=pexels-realtoughcandycom-11035380.jpg&fm=jpg" />
<Card.Body>
  <Card.Title>Node JS</Card.Title>
  <Card.Text>
  Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
  </Card.Text>
  </Card.Body>
  <Button className='but-1'>Explore</Button>

</Card>
<Card className='card-con' style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_21a537a2f60ea582bd213cab0722cb1a/express-js.png" />
<Card.Body>
  <Card.Title>Express JS</Card.Title>
  <Card.Text>
  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  </Card.Text>
  </Card.Body>
  <Button className='but-1'>Explore</Button>
</Card>


</div>
</>
  );
}

export default Cards;