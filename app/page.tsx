

import Colors from '../components/Colors';
import Links from '../components/Links';
import Finder from '@/components/Finder';


export default  function Home() {


  return (
    <main className="items-center p-5 min-w-full min-h-screen pt-20">
      
      <div className='grid gap-4 mx-auto md:grid-cols-2 md:w-5/6'> 
        <Colors />

        <Links />
      </div>
      <Finder />
    </main>
  );
}