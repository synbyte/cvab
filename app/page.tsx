

import Colors from '../components/Colors';
import Links from '../components/Links';
import Finder from '@/components/Finder';
import InstallPrompt from '@/components/InstallPrompt';


export default function Home() {
  return (
    <main className="tc-page flex flex-col gap-6">
      <InstallPrompt />
      <div className="grid gap-6 lg:grid-cols-2">
        <Colors />
        <Links />
      </div>
      <Finder />
    </main>
  );
}