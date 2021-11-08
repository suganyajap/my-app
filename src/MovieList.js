import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster }) => (
        <Movie name={name} poster={poster} rating={rating} summary={summary} />))}
    </section>
  );
}
