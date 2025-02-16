# Project Movies 🎬

This is a multi-page movie site built using Movie DB API. It fetches a list of movies, displays them on the landing page, and links it to a movie detail page.

The application shows the most Popular Movies on the landing page and on each movie detail page it also displays Similar Movies. In addition a 'Loading page' was created to show while the fetch is being processed and a 'Not Found page' for when a movie request does not match anything in the database.

## What have I learned 💡

- I include the React Router in the App.js with all the different available pages.
- To get the movie list I did a fetch in the MovieList component, I did this by using the React hooks **useEffect** and **useState** to store the data.
- I then did a **map()** on the movies array to generate the different movie cards. The user will be able to click on a card that redirects them to a page with the movie's details.
- In the MovieDetail component I did a fetch of movie details according to the id of the movie that the user has clicked on. This is achieved by using **params**, **temporal literals** and a **dynamic id**.
- In the SimilarMovies component I did a fetch of similar movies, which I import in the MovieDetails component and include in it's return.
- I have also created a Loading and Not Found page. While data is being processed in both MovieList and MovieDetails components the Loading page appears. If the data fetch fails, the user is redirected to the Not Found Page.
- For the styling I used **Styled Components** and **CSS** and to display the movie cards I used both flexbox and grid depending on the device.

## View it live 🍿

https://project-movie.netlify.app

