import React from "react";

export function AddReview() {

  // TODO: Implement the mutation

  const onSubmit = (event) => {
    event.preventDefault();
    // TODO: Trigger the mutation
  };

  return (
    <div className="mt-3">

      <form noValidate onSubmit={onSubmit}>
        <label className="block text-2xl mb-3 text-blueGray-800">
          Write a review
          <textarea
            className="block border-2 border-blue-900 w-9/12 h-36"
          />
        </label>
        <button className="p-1 border-2 rounded-md border-blue-900" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
