import React from 'react';

export const TmdbAttribution: React.FC = () => {
  return (
    <p>
      <small className="flex items-baseline">
        <img alt="" className="px-3 h-2" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
      </small>
    </p>
  )
}
