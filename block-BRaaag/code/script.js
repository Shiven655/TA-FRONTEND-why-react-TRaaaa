let input = documen.querySelectot('input');
let rootElm = document.querySelector('ul');

let allMovies = [];

input.addeventlistner('keyup', (event) => {
  if (event.key === 13) {
    let movie = {
      name: event.target.value,
      watched: false,
    };
    allMovies.push(movie);
    event.target.value = ' ';
  }
  createUI(allMovies, rootElm);
});

function handleClick(event) {
  let id = event.target.id;
  allmovies[id].watched = !allMovies[id].watched;
  createUI(allmovies, rootElm);
}

let elm = React.createElement;

function createUI(movies, root) {
  let movielist = movies.map((movie, id) => {
    // let li = elm(
    //   "li",
    //   {
    //     className: "movie-list-item",
    //   },
    //   elm("span", {}, movie.name),
    //   elm(
    //     "button",
    //     {
    //       className: "btn",
    //       id: id,
    //       onClick: handleClick,
    //     },
    //     movie.watched ? "Watched" : "To Watch"
    //   )
    // );
    return (
      <li className="movie-list-item">
        <span>{movie.name}</span>
        <button className="btn" id={i} onClick={handleClick}>
          {movie.watched ? 'Watched' : 'To Watch'}
        </button>
      </li>
    );
  });
  React.DOM.render(movielist, root);
}
createUI(allMovies, rootElm);
