import React from "react";

export function AddReview() {

  return (
    <div className="mt-3">

      <form noValidate>
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
