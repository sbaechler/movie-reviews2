import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import { getMovie } from '../../api/movies';
import {IMAGE_BASE_URL} from '../../constants';
import {MovieReviews} from '../MovieReviews/MovieReviews';

/**
 * The detail view for a single movie.
 * The id is taken from the URL params.
 */
export function MovieDetail() {
  const {id} = useParams();

  const { data: movie, isLoading, isError } = useQuery({
    queryKey: ['movies', id],
    queryFn: () => getMovie(id),
  })

  if(isLoading) {
    return (<div>Loading....</div>)
  } else if (isError) {
    return (<div>ERROR loading the movie</div>)
  }

  const { info, images, reviews } = movie;
  const imgSrc = `${IMAGE_BASE_URL}w342${info.poster_path}`

  const genres = info.genres.map(genre => (
    <span className="genre label" key={genre.id}>
      {genre.name}
    </span>
  ));

  return (
    <div className="mx-3">
      <Link to="/" className="text-indigo-500 font-bold uppercase py-2 text-sm outline-none mr-1 mb-1">&lt; Back to List</Link>
      <div className="mb-6">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
          {info.title}
          <br />
          <small className="font-normal leading-normal mt-0 mb-4 text-blueGray-800">{info.tagline}</small>
        </h1>
        <p>{genres}</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-9/12 sm:w-6/12 p-4 text-center">
            <img src={imgSrc} alt="Poster"
                 className="shadow-lg inline rounded max-w-full h-auto align-middle border-none"/>
          </div>
        </div>
        <p>{info.overview}</p>
      </div>

      <MovieReviews reviews={reviews} movieId={id} />

      <div className="py-8">
        <h2 className="text-2xl mb-3 text-blueGray-800">Images</h2>
        <ul className="flex flex-wrap -mx-4 -mb-8">
          {images.map((img) => (
            <li className="w-1/3 sm:w-1/4 md:w-1/6 xl:w-1/12 px-4 mb-8" key={img.file_path}>
              <img
                className="rounded shadow-md"
                height={img.height}
                width={img.width}
                src={`${IMAGE_BASE_URL}w185${img.file_path}`} alt=""/></li>
            ))}
        </ul>
      </div>
    </div>
  );
}
