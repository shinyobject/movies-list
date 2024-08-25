import { useEffect, useState } from 'react'
import './App.css';
import styles from './App.module.css';
import type { MovieData } from './moviesData.ts'
// Assume movies is now an array of objects with title and year
// If it's not, you'll need to update the movies.ts file
import  movies  from './moviesData.ts';

function naturalSort(arr:MovieData[]) {
  const ignoreWords = ['the', 'a', 'an'];
  
  function cleanString(str:string) {
    str = str.toLowerCase();
    for (let word of ignoreWords) {
      if (str.startsWith(word + ' ')) {
        return str.slice(word.length + 1);
      }
    }
    return str;
  }

  return [...arr].sort((a, b) => {
    const cleanA = cleanString(a.title);
    const cleanB = cleanString(b.title);
    return cleanA.localeCompare(cleanB);
  });
}

function YouTubeLink({ isIOS, movie }: {isIOS: boolean, movie: MovieData}) {
  const link = `results?search_query=${movie.title.replace(' ','+')}`
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
    <button onClick={openYouTubeLink}>{movie.title} ({movie.releaseYear})</button>
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
    </div>
  )
}

function App() {
  const [fontSize, setFontSize] = useState(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return savedFontSize ? parseInt(savedFontSize, 10) : 16;
  });


  const movieSort = (sortType: string) => {
    let sorted;

    switch (sortType) {
      case 'year':
        sorted = [...movies].sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case 'alphabetical':
        sorted = naturalSort(movies);
        break;
      default:
        sorted = [...movies]; // Reset to original order
    }
    return sorted;
  }

  const [sortedMovies, setSortedMovies] = useState(movieSort('year'));

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


  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = event.target.value;
    
    setSortedMovies(movieSort(sortType));
  };

  return (
    <>
      <ResizeButtons decreaseFontSize={decreaseFontSize} increaseFontSize={increaseFontSize} />
      <div className={styles.sort}>
        <label htmlFor="sortingOptions">Sort by: </label>
        <select id="sortingOptions" onChange={handleSort}>
          <option value="year">Release year</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      <main>
        {sortedMovies.map((movie) => (
          <YouTubeLink key={movie.title} isIOS={device} movie={movie} />
        ))}
      </main>
    </>
  );
}

export default App;