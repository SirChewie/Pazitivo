import './Reset.css';
import './App.css';
import menuPicture from './Menu.jpg'


function Ribbon(){
  return (
    <>
    <nav className='topRibbon'>
      <table>
        <tbody>
          <tr>
            <td id='homeButton' className='button'><a href='#top'>Home</a></td>
            <td className='button'><a href='#Menu'>Menu</a></td>
            <td className='button'><a href='#contactInfo'>Contact</a></td>
          </tr>
        </tbody>
      </table>
    </nav>
    </>
  )
}

function Landing() {
  return(
  <div className='Landing'>
      
    </div>
    )
}

function ContactInfo(){
  return(
    <>
      <span id='contactInfo'><h4>Address:</h4><br/> <p className='indent'>2385 Smelley Rd,</p><p className='indent'> Longview, TX 75605</p><br/>
      </span>
      <span><h4>Hours:</h4><br/>
      <p className='indent'>Tuesday - Sunday 10:00am - 7:00pm </p>
      <br/>
      </span>
      <span><h4 >Phone Number:<br/><br/><a className='indent' id='phoneNumber' href='tel:903-746-1899'>903-746-1899</a></h4></span>
      
    </>
  )
}

function Map(){
  return(
  <iframe title='map' id='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.762716075733!2d-94.699264!3d32.532483799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86364731a7ef5799%3A0x7d7f0d0a90f7a220!2s2385%20Smelley%20Rd%2C%20Longview%2C%20TX%2075605!5e0!3m2!1sen!2sus!4v1668721782932!5m2!1sen!2sus"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" alt="Google map of Pazitivo's location"></iframe>
  )
}

function DualSec(props){
  return(
    <div className='DualSec'>
      <h2 className='title'>{props.title}</h2>
      <div id='leftContact'>{props.text}</div>
      <p id='rightContact'>{props.contents}
      </p>
    </div>
  )
}

function Menu(props){
  return(
    <>
    <div className='Menu'>
      <h2 className='title'>{props.title}</h2>
      <img id='Menu' src={menuPicture} alt='The restaurant menu'/>
    </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      
      <Ribbon/>
      <Landing  id='top' />
      <Menu title='Our Menu' contents = {<div id='menu'></div>}/>
      <DualSec title= 'Contact Us' text={<ContactInfo/>}contents={<Map/>}/>
      
    </div>
  );
}

export default App;
