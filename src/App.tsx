import { useEffect, useState } from 'react'
import './App.css';
import { movies } from './movies.ts';
import styles from './App.module.css';



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

type ResizeButtonsProps = {
  decreaseFontSize: () => void;
  increaseFontSize: () => void;
}

function ResizeButtons({ decreaseFontSize, increaseFontSize}: ResizeButtonsProps) {
  return (
  <div className={styles.ResizeButtons}>
  <h1><span>Movies&nbsp;</span><span>on YouTube</span></h1>
  <button onClick={decreaseFontSize}>A-</button>
  <button onClick={increaseFontSize}>A+</button>
  </div>)
}

function App() {
  const [fontSize, setFontSize] = useState(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return savedFontSize ? parseInt(savedFontSize, 10) : 16;
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
    document.documentElement.style.setProperty('--font-size-button', `${fontSize}px`);
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));


  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };
  const device = isIOS();

  return (
    <>
      <ResizeButtons decreaseFontSize={decreaseFontSize} increaseFontSize={increaseFontSize} />
      <main>
      { movies.map((movie) => (
        <YouTubeLink key={movie} isIOS={device} videoId={movie} />
      ))}
      </main>
    </>
  );
}

export default App;
