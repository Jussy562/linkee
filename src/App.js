import './App.css';
import  { linkData } from './components/link/linkFiles';
import Links from './components/link/links';
import Profile from './components/profile/profile';
function App() {
  return (
    <div className="bg-white h-screen w-full">
      <div className="md:px-20 md:py-8 md:pb-20 px-6 py-4">
        <Profile />
        {
          linkData.map((item) => (
            <Links key={item.id} item={item} />
          ))
        }
      </div>
      <hr />
    </div>
  );
}

export default App;
