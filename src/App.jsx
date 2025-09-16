import './App.css';
import CommingSoon_Background from './components/CommingSoon_Background';
import Title from './components/Title';
import Tagline from './components/Tagline';
import Mascot from './components/Mascot';
import Description from './components/Description';
import Join_Waiting_List from './components/Join_Waiting_List';

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      {/* <CommingSoon_Background className='w-dvw h-dvh'> */}
        <Title content="Ekmāgnatā"/>
        <Tagline content="FOCUS is FREEDOM"/>
        <Mascot firstSrc={'/infinity-logo.png'} secondSrc={'/mascot.png'} className='h-[400px] w-full'/>
        <Description/>
        <Join_Waiting_List/>
      {/* </CommingSoon_Background> */}
    </div>
  )
}

export default App
