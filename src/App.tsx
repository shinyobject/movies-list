import './App.css';
import { movies } from './movies.ts';



function YouTubeLink({ isIOS,videoId }: { isIOS: boolean, videoId: string}) {
 
  const link = `results?search_query=${videoId.replace(' ','+')}`

  const openYouTubeLink = () => {
    if (isIOS) {
      window.location.href = `youtube://www.youtube.com/${link}`;
      setTimeout(() => {
        window.location.href = `https://www.youtube.com/${link}`;
      }, 500);
    } else {
      window.location.href = `https://www.youtube.com/${link}`;
    }
  };

  return (
    <a href="#" onClick={openYouTubeLink}>{videoId}</a>
  );
}

function App() {
  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };
  const device = isIOS();

  return (
    <>
      <h1>Movies on YouTube</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>
            <YouTubeLink isIOS={device} videoId={movie} />
          
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
