import './App.css';
import Footer from './components/footer/footer';
import  { linkData } from './components/link/linkFiles';
import Links from './components/link/links';
import Profile from './components/profile/profile';
function App() {
  return (
    <div className="bg-white h-screen w-full">
      <div className="md:px-20 md:py-8 md:pb-4 px-6 py-4">
        <Profile />
        {
          linkData.map((item) => (
            <Links key={item.id} item={item} />
          ))
        }
      </div>

      <div className='socials flex gap-4 justify-center md:px-20 md:py-8'>
        <a href='https://slack.com'>
          <img src='/images/slack.png' alt='slack' className='w-7 h-7' />
        </a>
        
        <a href='https://github.com/jussy562'>
          <img  src='/images/github.png' alt='slack' className='w-7 h-7'  />
        </a>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
