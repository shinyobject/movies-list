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
    <button onClick={openYouTubeLink}>{videoId}</button>
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
        {movies.map((movie) => (
            <YouTubeLink key={movie} isIOS={device} videoId={movie} />
        ))}
    </>
  );
}

export default App;
