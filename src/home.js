import React from 'react';
import { Segment, Header, Button, Icon,div,img } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function Home() {
   return (
    
       <Segment color='green'>
           <Header as='h1' color='green' textAlign='center'>Home</Header>
           <Header as='h3' textAlign='center'>
               <Icon name='check circle' color='blue'/>
               Welcome
           </Header>
           <div class="ui small image">
  <img src="/Users/marzukihalaskon/Desktop/pengajar-belajar1/my-project/image/penida.jpg"/>
</div>
           <Button as={Link} to="/Register" color='blue' fluid>
               <Icon name='log out'/>
               Logout
           </Button>
       </Segment>
   );
}

export default Home;

