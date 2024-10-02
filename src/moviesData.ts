export type MovieData = {
    title: string;
    releaseYear: number;
    dateAdded: string;
  };
  const moviesData: MovieData[] = [
    { title: '127 Hours', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: '1917', releaseYear: 2019, dateAdded: '8/1/2024' },
    { title: '21 Jump Street', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: '22 Jump Street', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: '300', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: '42nd Street', releaseYear: 1933, dateAdded: '8/1/2024' },
    { title: 'Air Force One', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Alien', releaseYear: 1979, dateAdded: '8/1/2024' },
    { title: 'Aliens', releaseYear: 1986, dateAdded: '8/1/2024' },
    { title: 'American Graffiti', releaseYear: 1973, dateAdded: '8/1/2024' },
    { title: 'The American President', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'American Sniper', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'Analyze That', releaseYear: 2002, dateAdded: '8/1/2024' },
    { title: 'Analyze This', releaseYear: 1999, dateAdded: '8/1/2024' },
    { title: 'The Andromeda Strain', releaseYear: 1971, dateAdded: '8/1/2024' },
    { title: 'Apollo 13', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'Atomic Blonde', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Attack the Block', releaseYear: 2011, dateAdded: '8/1/2024' },
    {
      title: 'Austin Powers in Goldmember',
      releaseYear: 2002,
      dateAdded: '8/1/2024',
    },
    { title: 'Babe', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'Baby Driver', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Back to the Future', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'Back to the Future II', releaseYear: 1989, dateAdded: '8/1/2024' },
    { title: 'Back to the Future III', releaseYear: 1990, dateAdded: '8/1/2024' },
    { title: 'Bad Moms', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Barbie', releaseYear: 2023, dateAdded: '8/1/2024' },
    { title: 'Barry Lyndon', releaseYear: 1975, dateAdded: '8/1/2024' },
    { title: 'BASEketball', releaseYear: 1998, dateAdded: '8/1/2024' },
    { title: 'Batman Begins', releaseYear: 2005, dateAdded: '8/1/2024' },
    { title: 'Beetlejuice', releaseYear: 1988, dateAdded: '9/1/2024' },
    { title: 'Bells are Ringing', releaseYear: 1960, dateAdded: '8/1/2024' },
    { title: 'Bend It Like Beckham', releaseYear: 2002, dateAdded: '8/1/2024' },
    { title: 'Big', releaseYear: 1988, dateAdded: '8/1/2024' },
    { title: 'Big Hero 6', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'The Big Lebowski', releaseYear: 1998, dateAdded: '8/1/2024' },
    {
      title: 'Big Trouble in Little China',
      releaseYear: 1986,
      dateAdded: '8/1/2024',
    },
    { title: 'Birdman', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'The Birds', releaseYear: 1963, dateAdded: '8/1/2024' },
    {
      title: 'Birds Of Prey And The Fantabulous Emancipation Of One Harley Quinn',
      releaseYear: 2020,
      dateAdded: '8/1/2024',
    },
    { title: 'The Black Hole', releaseYear: 1979, dateAdded: '8/1/2024' },
    { title: 'Blade II', releaseYear: 2002, dateAdded: '8/1/2024' },
    { title: 'Blade Runner 2049', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Blazing Saddles', releaseYear: 1974, dateAdded: '8/1/2024' },
    { title: 'The Blind Side', releaseYear: 2009, dateAdded: '8/1/2024' },
    { title: 'The Blues Brothers', releaseYear: 1980, dateAdded: '8/1/2024' },
    { title: 'The Bodyguard', releaseYear: 1992, dateAdded: '8/1/2024' },
    { title: 'Bohemian Rhapsody', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Boogie Nights', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Bottle Shock', releaseYear: 2008, dateAdded: '8/1/2024' },
    { title: 'The Bourne Identity', releaseYear: 2002, dateAdded: '8/1/2024' },
    { title: 'The Bourne Legacy', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: 'The Bourne Supremacy', releaseYear: 2004, dateAdded: '8/1/2024' },
    { title: 'The Bourne Ultimatum', releaseYear: 2007, dateAdded: '8/1/2024' },
    { title: 'Brave', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: 'Brazil', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'The Breakfast Club', releaseYear: 1985, dateAdded: '8/1/2024' },
    {
      title: 'The Bridge On the River Kwai',
      releaseYear: 1957,
      dateAdded: '8/1/2024',
    },
    { title: 'Bubble Boy', releaseYear: 2001, dateAdded: '8/1/2024' },
    {
      title: 'Butch Cassidy and the Sundance Kid',
      releaseYear: 1969,
      dateAdded: '8/1/2024',
    },
    { title: 'Captain Phillips', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'Cars 3', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Casino', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'Changeling', releaseYear: 2008, dateAdded: '8/1/2024' },
    { title: 'Chariots of Fire', releaseYear: 1981, dateAdded: '8/1/2024' },
    { title: 'Children of Men', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: 'Citizen Kane', releaseYear: 1941, dateAdded: '8/1/2024' },
    { title: 'Cliffhanger', releaseYear: 1993, dateAdded: '8/1/2024' },
    { title: 'Cobra', releaseYear: 1986, dateAdded: '8/1/2024' },
    { title: 'Coco', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'The Color Purple', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'Conan the Barbarian', releaseYear: 1982, dateAdded: '8/1/2024' },
    { title: 'Contact', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Contagion', releaseYear: 2011, dateAdded: '8/1/2024' },
    { title: 'The Contender', releaseYear: 2000, dateAdded: '8/1/2024' },
    { title: 'Crazy Rich Asians', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Crimson Tide', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'The Dark Crystal', releaseYear: 1982, dateAdded: '8/1/2024' },
    { title: 'The Dark Knight', releaseYear: 2008, dateAdded: '8/1/2024' },
    { title: 'The Dark Tower', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Date Night', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Dave', releaseYear: 1993, dateAdded: '8/1/2024' },
    {
      title: 'Dawn of The Planet of The Apes',
      releaseYear: 2014,
      dateAdded: '8/1/2024',
    },
    { title: 'The Day of the Jackal', releaseYear: 1973, dateAdded: '8/1/2024' },
    { title: 'Deadpool', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Deadpool 2', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'The Devil Wears Prada', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: 'Dial M for Murder', releaseYear: 1954, dateAdded: '8/1/2024' },
    { title: 'Die Hard', releaseYear: 1988, dateAdded: '8/1/2024' },
    { title: 'Die Hard 2', releaseYear: 1990, dateAdded: '8/1/2024' },
    { title: 'Doctor Zhivago', releaseYear: 1965, dateAdded: '8/1/2024' },
    { title: 'Dragonheart', releaseYear: 1996, dateAdded: '8/1/2024' },
    { title: 'Dumb and Dumber', releaseYear: 1994, dateAdded: '8/1/2024' },
    { title: 'Eddie the Eagle', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Elf', releaseYear: 2003, dateAdded: '8/1/2024' },
    { title: 'Elvis', releaseYear: 2022, dateAdded: '8/1/2024' },
    { title: 'Empire of the Sun', releaseYear: 1987, dateAdded: '8/1/2024' },
    { title: 'Enter the Dragon', releaseYear: 1973, dateAdded: '8/1/2024' },
    { title: 'The Equalizer 3', releaseYear: 2023, dateAdded: '8/1/2024' },
    { title: 'Erin Brockovich', releaseYear: 2000, dateAdded: '8/1/2024' },
    { title: 'Excalibur', releaseYear: 1981, dateAdded: '8/1/2024' },
    {
      title: 'Fantastic Beasts and Where to Find Them',
      releaseYear: 2016,
      dateAdded: '8/1/2024',
    },
    {
      title: 'The Fate Of The Furious',
      releaseYear: 2017,
      dateAdded: '8/1/2024',
    },
    { title: 'The Favourite', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'A Few Good Men', releaseYear: 1992, dateAdded: '8/1/2024' },
    { title: 'Field of Dreams', releaseYear: 1989, dateAdded: '8/1/2024' },
    { title: 'The Fifth Element', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Fight Club', releaseYear: 1999, dateAdded: '8/1/2024' },
    { title: 'Finding Dory', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'First Man', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Flash Gordon', releaseYear: 1980, dateAdded: '8/1/2024' },
    { title: 'Fletch', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'The French Connection', releaseYear: 1971, dateAdded: '8/1/2024' },
    { title: 'Friday', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'Friday Night Lights', releaseYear: 2004, dateAdded: '8/1/2024' },
    { title: 'The Frighteners', releaseYear: 1996, dateAdded: '8/1/2024' },
    { title: 'Game Night', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Ghostbusters', releaseYear: 1984, dateAdded: '8/1/2024' },
    { title: 'Girls Trip', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Glory', releaseYear: 1989, dateAdded: '8/1/2024' },
    { title: 'Gone Girl', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'A Good Day to Die Hard', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'The Good Dinosaur', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Goodfellas', releaseYear: 1990, dateAdded: '8/1/2024' },
    { title: 'The Goonies', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'Gravity', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'The Greatest Showman', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'The Green Mile', releaseYear: 1999, dateAdded: '8/1/2024' },
    { title: 'Gremlins', releaseYear: 1984, dateAdded: '8/1/2024' },
    { title: 'Groundhog Day', releaseYear: 1993, dateAdded: '8/1/2024' },
    { title: 'Hairspray', releaseYear: 2007, dateAdded: '8/1/2024' },
    { title: 'Hancock', releaseYear: 2008, dateAdded: '8/1/2024' },
    { title: 'The Hangover', releaseYear: 2009, dateAdded: '8/1/2024' },
    { title: 'Hanna', releaseYear: 2011, dateAdded: '8/1/2024' },
    { title: 'Happy Feet', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: 'Harriet', releaseYear: 2019, dateAdded: '8/1/2024' },
    {
      title: 'Harry and the Hendersons',
      releaseYear: 1987,
      dateAdded: '8/1/2024',
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      releaseYear: 2002,
      dateAdded: '8/1/2024',
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      releaseYear: 2005,
      dateAdded: '8/1/2024',
    },
    {
      title: 'Harry Potter and the Half Blood Prince',
      releaseYear: 2009,
      dateAdded: '8/1/2024',
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      releaseYear: 2007,
      dateAdded: '8/1/2024',
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      releaseYear: 2004,
      dateAdded: '8/1/2024',
    },
    { title: 'The Heat', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'Hellboy', releaseYear: 2004, dateAdded: '8/1/2024' },
    { title: 'Hidden Figures', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Hot Fuzz', releaseYear: 2007, dateAdded: '8/1/2024' },
    {
      title: 'How to Train Your Dragon',
      releaseYear: 2010,
      dateAdded: '8/1/2024',
    },
    {
      title: 'How to Train Your Dragon 2',
      releaseYear: 2014,
      dateAdded: '8/1/2024',
    },
    { title: 'Hudson Hawk', releaseYear: 1991, dateAdded: '8/1/2024' },
    { title: 'I Confess', releaseYear: 1953, dateAdded: '8/1/2024' },
    { title: 'Ice Age', releaseYear: 2002, dateAdded: '8/1/2024' },
    { title: 'Idiocracy', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: 'Inception', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'The Incredibles', releaseYear: 2004, dateAdded: '8/1/2024' },
    { title: 'Incredibles 2', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Independence Day', releaseYear: 1996, dateAdded: '8/1/2024' },
    {
      title: 'Indiana Jones and the Dial of Destiny',
      releaseYear: 2023,
      dateAdded: '8/1/2024',
    },
    { title: 'Inside Out', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Inside Out 2', releaseYear: 2024, dateAdded: '8/23/2024' },
    { title: 'Insidious', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Invictus', releaseYear: 2009, dateAdded: '8/1/2024' },
    { title: 'The Iron Giant', releaseYear: 1999, dateAdded: '8/1/2024' },
    { title: 'Isle of Dogs', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'IT', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'IT Chapter Two', releaseYear: 2019, dateAdded: '8/1/2024' },
    { title: 'Jason Bourne', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Jaws', releaseYear: 1975, dateAdded: '8/1/2024' },
    { title: 'The Jerk', releaseYear: 1979, dateAdded: '8/1/2024' },
    { title: 'Jerry Maguire', releaseYear: 1996, dateAdded: '8/1/2024' },
    { title: 'The Jewel of the Nile', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'Joe Versus The Volcano', releaseYear: 1990, dateAdded: '8/1/2024' },
    { title: 'Jojo Rabbit', releaseYear: 2019, dateAdded: '8/1/2024' },
    { title: 'The Judge', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'Jumanji', releaseYear: 1995, dateAdded: '8/1/2024' },
    { title: 'The Jungle Book', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Jupiter Ascending', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Jurassic Park', releaseYear: 1993, dateAdded: '8/1/2024' },
    { title: 'Kiss Kiss Bang Bang', releaseYear: 2005, dateAdded: '8/1/2024' },
    {
      title: 'Kubo and the Two Strings',
      releaseYear: 2016,
      dateAdded: '8/1/2024',
    },
    { title: 'Kung Fu Panda', releaseYear: 2008, dateAdded: '8/1/2024' },
    { title: 'Kung Fu Panda 3', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Labyrinth', releaseYear: 1986, dateAdded: '8/1/2024' },
    { title: 'Lady In The Water', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: 'Last Action Hero', releaseYear: 1993, dateAdded: '8/1/2024' },
    { title: 'The Last Starfighter', releaseYear: 1984, dateAdded: '8/1/2024' },
    { title: 'Legend', releaseYear: 1985, dateAdded: '8/1/2024' },
    { title: 'The Lego Movie', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'Life of Pi', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: 'The Lion King', releaseYear: 1994, dateAdded: '8/1/2024' },
    { title: 'Little Shop of Horrors', releaseYear: 1986, dateAdded: '8/1/2024' },
    { title: 'Little Women', releaseYear: 2019, dateAdded: '8/1/2024' },
    { title: 'Live Free or Die Hard', releaseYear: 2007, dateAdded: '8/1/2024' },
    { title: 'Logan', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'The Longest Day', releaseYear: 1962, dateAdded: '8/1/2024' },
    { title: 'Looper', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: 'The Lost Boys', releaseYear: 1987, dateAdded: '8/1/2024' },
    { title: 'Love Actually', releaseYear: 2003, dateAdded: '8/1/2024' },
    { title: 'Lucy', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'Machete', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Magic Mike', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: 'Maleficent', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'The Martian', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'The Marvels', releaseYear: 2023, dateAdded: '8/1/2024' },
    { title: 'The Matrix', releaseYear: 1999, dateAdded: '8/1/2024' },
    { title: 'The Matrix Reloaded', releaseYear: 2003, dateAdded: '8/1/2024' },
    { title: 'The Matrix Revolutions', releaseYear: 2003, dateAdded: '8/1/2024' },
    { title: 'Men In Black', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Miracle on 34th Street', releaseYear: 1947, dateAdded: '8/1/2024' },
    { title: 'Miss Congeniality', releaseYear: 2000, dateAdded: '8/1/2024' },
    { title: 'Moana', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Monsters University', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'Moulin Rouge', releaseYear: 2001, dateAdded: '8/1/2024' },
    { title: 'Mulan', releaseYear: 1998, dateAdded: '8/1/2024' },
    { title: 'The Muppet Movie', releaseYear: 1979, dateAdded: '8/1/2024' },
    { title: 'Murder by Death', releaseYear: 1976, dateAdded: '8/1/2024' },
    { title: 'The Music Man', releaseYear: 1962, dateAdded: '8/1/2024' },
    { title: 'My Cousin Vinny', releaseYear: 1992, dateAdded: '8/1/2024' },
    { title: 'Noises Off', releaseYear: 1992, dateAdded: '8/1/2024' },
    { title: 'North By Northwest', releaseYear: 1959, dateAdded: '8/1/2024' },
    { title: 'Onward', releaseYear: 2020, dateAdded: '8/1/2024' },
    { title: 'Oppenheimer', releaseYear: 2023, dateAdded: '8/1/2024' },
    { title: 'The Outsiders', releaseYear: 1983, dateAdded: '8/1/2024' },
    { title: 'Pacific Rim', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'Paddington 2', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Parasite', releaseYear: 2019, dateAdded: '8/1/2024' },
    { title: 'Pitch Perfect', releaseYear: 2012, dateAdded: '8/1/2024' },
    { title: 'Poltergeist', releaseYear: 1982, dateAdded: '8/1/2024' },
    { title: 'The Post', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'Practical Magic', releaseYear: 1998, dateAdded: '8/1/2024' },
    { title: 'Predator', releaseYear: 1987, dateAdded: '8/1/2024' },
    { title: 'Predestination', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'The Proposal', releaseYear: 2009, dateAdded: '8/1/2024' },
    { title: 'Psycho', releaseYear: 1960, dateAdded: '8/1/2024' },
    { title: 'Purple Rain', releaseYear: 1984, dateAdded: '8/1/2024' },
    { title: 'Raising Arizona', releaseYear: 1987, dateAdded: '8/1/2024' },
    { title: 'Ratatouille', releaseYear: 2007, dateAdded: '8/1/2024' },
    { title: 'Ray', releaseYear: 2004, dateAdded: '8/1/2024' },
    { title: 'Ready Player One', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Rebel Without a Cause', releaseYear: 1955, dateAdded: '8/1/2024' },
    { title: 'Red Planet', releaseYear: 2000, dateAdded: '8/1/2024' },
    { title: 'Red Sparrow', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'The Revenant', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'The Right Stuff', releaseYear: 1983, dateAdded: '8/1/2024' },
    {
      title: 'Rise of the Planet of the Apes',
      releaseYear: 2011,
      dateAdded: '8/1/2024',
    },
    { title: 'Risky Business', releaseYear: 1983, dateAdded: '8/1/2024' },
    {
      title: 'A River Runs Through It',
      releaseYear: 1992,
      dateAdded: '8/1/2024',
    },
    { title: 'The Rock', releaseYear: 1996, dateAdded: '8/1/2024' },
    { title: 'Romancing the Stone', releaseYear: 1984, dateAdded: '8/1/2024' },
    { title: 'Roxanne', releaseYear: 1987, dateAdded: '8/1/2024' },
    { title: 'Run Lola Run', releaseYear: 1998, dateAdded: '8/1/2024' },
    { title: 'Rush Hour', releaseYear: 1998, dateAdded: '8/1/2024' },
    { title: 'Ruthless People', releaseYear: 1986, dateAdded: '8/1/2024' },
    { title: 'Salt', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Say Anything', releaseYear: 1989, dateAdded: '8/1/2024' },
    { title: 'Scent of a Woman', releaseYear: 1992, dateAdded: '8/1/2024' },
    {
      title: 'The Secret Life of Pets',
      releaseYear: 2016,
      dateAdded: '8/1/2024',
    },
    {
      title: 'The Secret Life of Walter Mitty',
      releaseYear: 2013,
      dateAdded: '8/1/2024',
    },
    {
      title: 'The Secret of My Success',
      releaseYear: 1987,
      dateAdded: '8/1/2024',
    },
    { title: 'Selena', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Serenity', releaseYear: 2005, dateAdded: '8/1/2024' },
    {
      title: 'Seven Brides for Seven Brothers',
      releaseYear: 1954,
      dateAdded: '8/1/2024',
    },
    { title: 'Shaun of the Dead', releaseYear: 2004, dateAdded: '8/1/2024' },
    {
      title: 'The Shawshank Redemption',
      releaseYear: 1994,
      dateAdded: '8/1/2024',
    },
    { title: 'The Shining', releaseYear: 1980, dateAdded: '8/1/2024' },
    { title: 'Shrek', releaseYear: 2001, dateAdded: '8/1/2024' },
    { title: 'Shrek 2', releaseYear: 2004, dateAdded: '8/1/2024' },
    { title: 'Shrek Forever After', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Shrek the Third', releaseYear: 2007, dateAdded: '8/1/2024' },
    { title: 'The Simpsons Movie', releaseYear: 2007, dateAdded: '8/1/2024' },
    { title: 'Slumdog Millionaire', releaseYear: 2008, dateAdded: '8/1/2024' },
    { title: 'Smokey and the Bandit', releaseYear: 1977, dateAdded: '8/1/2024' },
    { title: 'Snatch', releaseYear: 2000, dateAdded: '8/1/2024' },
    { title: 'Sneakers', releaseYear: 1992, dateAdded: '8/1/2024' },
    {
      title: 'Snow White and The Seven Dwarfs',
      releaseYear: 1937,
      dateAdded: '8/1/2024',
    },
    {
      title: 'So I Married an Axe Murderer',
      releaseYear: 1993,
      dateAdded: '8/1/2024',
    },
    { title: 'The Social Network', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Song of the Sea', releaseYear: 2014, dateAdded: '8/1/2024' },
    { title: 'The Sound of Music', releaseYear: 1965, dateAdded: '8/1/2024' },
    { title: 'Soylent Green', releaseYear: 1973, dateAdded: '8/1/2024' },
    { title: 'SPARTACUS', releaseYear: 1960, dateAdded: '8/1/2024' },
    { title: 'Speed', releaseYear: 1994, dateAdded: '8/1/2024' },
    { title: 'Spice World', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Spy Game', releaseYear: 2001, dateAdded: '8/1/2024' },
    { title: 'A Star Is Born', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Starship Troopers', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Strangers on a Train', releaseYear: 1951, dateAdded: '8/1/2024' },
    { title: 'Stripes', releaseYear: 1981, dateAdded: '8/1/2024' },
    { title: 'Superman Returns', releaseYear: 2006, dateAdded: '8/1/2024' },
    { title: 'Suspicion', releaseYear: 1941, dateAdded: '8/1/2024' },
    { title: 'Tangled', releaseYear: 2010, dateAdded: '8/1/2024' },
    {
      title: 'Tenacious D in The Pick of Destiny',
      releaseYear: 2006,
      dateAdded: '8/1/2024',
    },
    { title: 'Tenet', releaseYear: 2020, dateAdded: '8/1/2024' },
    { title: 'They Live', releaseYear: 1988, dateAdded: '8/1/2024' },
    { title: 'The Thing', releaseYear: 1982, dateAdded: '8/1/2024' },
    { title: 'Thirteen Days', releaseYear: 2000, dateAdded: '8/1/2024' },
    { title: 'Tomorrowland', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Tootsie', releaseYear: 1982, dateAdded: '8/1/2024' },
    { title: 'Total Recall', releaseYear: 1990, dateAdded: '8/1/2024' },
    { title: 'The Town', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Toy Story 2', releaseYear: 1999, dateAdded: '8/1/2024' },
    { title: 'Toy Story 3', releaseYear: 2010, dateAdded: '8/1/2024' },
    { title: 'Toy Story 4', releaseYear: 2019, dateAdded: '8/1/2024' },
    { title: 'Trainwreck', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Tremors', releaseYear: 1990, dateAdded: '8/1/2024' },
    { title: 'Tron', releaseYear: 1982, dateAdded: '8/1/2024' },
    { title: 'True Lies', releaseYear: 1994, dateAdded: '8/1/2024' },
    { title: 'Undercover Brother', releaseYear: 2002, dateAdded: '8/1/2024' },
    { title: 'V for Vendetta', releaseYear: 2005, dateAdded: '8/1/2024' },
    { title: 'Vacation', releaseYear: 2015, dateAdded: '8/1/2024' },
    { title: 'Vegas Vacation', releaseYear: 1997, dateAdded: '8/1/2024' },
    { title: 'Venom', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Vice', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'Wall Street', releaseYear: 1987, dateAdded: '8/1/2024' },
    {
      title: 'Walt Disney Animation Studios Short Films Collection',
      releaseYear: 2015,
      dateAdded: '8/1/2024',
    },
    { title: 'Wanted', releaseYear: 2008, dateAdded: '8/1/2024' },
    {
      title: 'War for the Planet of the Apes',
      releaseYear: 2017,
      dateAdded: '8/1/2024',
    },
    { title: 'Weird Science', releaseYear: 1985, dateAdded: '8/1/2024' },
    {
      title: 'The Witches of Eastwick',
      releaseYear: 1987,
      dateAdded: '8/1/2024',
    },
    { title: 'The Wiz', releaseYear: 1978, dateAdded: '8/1/2024' },
    { title: 'The Wolverine', releaseYear: 2013, dateAdded: '8/1/2024' },
    { title: 'The Woman King', releaseYear: 2022, dateAdded: '8/1/2024' },
    { title: 'Wonder Woman', releaseYear: 2017, dateAdded: '8/1/2024' },
    { title: 'A Wrinkle in Time', releaseYear: 2018, dateAdded: '8/1/2024' },
    { title: 'The Wrong Man', releaseYear: 1956, dateAdded: '8/1/2024' },
    { title: 'X2', releaseYear: 2003, dateAdded: '8/1/2024' },
    { title: 'Zootopia', releaseYear: 2016, dateAdded: '8/1/2024' },
    { title: 'Deadpool and Wolverine', releaseYear: 2016, dateAdded: '10/1/2024' },
  ];
  
  export default moviesData;