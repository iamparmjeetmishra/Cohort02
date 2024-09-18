import {BellIcon} from '@radix-ui/react-icons'
import { Avatar, AvatarFallback } from './ui/avatar';
import { Link } from 'react-router-dom';
export default function Appbar() {
   
   return <header className='flex justify-between items-center py-4 container m-auto border-b'>
      <h1 className="font-bold text-2xl">BlogME</h1>
      <div className='flex items-center gap-2'>
         <Link to={'/publish'}>
            <BellIcon />
         </Link>
         <Avatar>
            <AvatarFallback>{ 'P' }</AvatarFallback>
         </Avatar>
      </div>
   </header>;
}
