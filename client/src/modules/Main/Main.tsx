import { useAppSelector } from '../../hooks/redux';
import Aside from '../ui/Aside/Aside';
import Chat from '../ui/Chat/Chat';
import './Main.scss';

function Main() {
   return (
      <main className='main max-width'>
         <Aside />
         <Chat />
      </main>
   );
}

export default Main;
