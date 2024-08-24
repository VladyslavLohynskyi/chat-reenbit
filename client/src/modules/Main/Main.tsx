import { useAppSelector } from '../../hooks/redux';
import Aside from '../ui/Aside/Aside';
import './Main.scss';

function Main() {
   const { chats } = useAppSelector((state) => state.chatsReducer);
   console.log(chats);
   return (
      <div className='main max-width'>
         <Aside />
         <div className='chat'>chat</div>
      </div>
   );
}

export default Main;
