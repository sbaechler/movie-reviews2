import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitMovieReview } from "../../api/movies";

export function AddReview({ movieId, author }) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => submitMovieReview({
        movieId,
        content,
        author,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId] });
      setContent('');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault()
    mutation.mutate();
  }

  return (
    <div className="mt-3">
      {mutation.error && (
        <h5 onClick={() => mutation.reset()}>{String(mutation.error)}</h5>
      )}

      <form onSubmit={onSubmit} noValidate>
        <label className="block text-2xl mb-3 text-blueGray-800">
          Write a review
          <textarea
            className="block border-2 border-blue-900 w-9/12 h-36"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </label>
        <button
          className="p-1 border-2 rounded-md border-blue-900"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
