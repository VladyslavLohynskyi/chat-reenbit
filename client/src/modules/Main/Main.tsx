import Aside from '../ui/Aside/Aside';
import './Main.scss';

function Main() {
   return (
      <div className='main max-width'>
         <Aside />
         <div className='chat'>chat</div>
      </div>
   );
}

export default Main;
