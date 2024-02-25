import React from "react";
import { useState } from "react";
import Display from "./Display";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const MAX_PHOTOS = 15;
  const MAX_PAGE = 1;
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handelFetchCall = async () => {
    try {
      if (search === "") {
        alert("ethachi type pannu da lusu");
        return;
      }
      setLoading(true);
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}&per_page=${MAX_PHOTOS}&page=${MAX_PAGE}`,
        {
          headers: {
            Authorization:
              "V9KkzkczGseGszHGHFYy5fdGceC69kVaOUGsEZmE289eF398xaU4xG2W",
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setPhotos(data.photos);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className='flex justify-center items-center py-14 gap-4 '>
        <input
          className=' px-4 py-2 text-base w-80 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type='text'
          placeholder='Search here ...'
        />
        <button
          onClick={handelFetchCall}
          className=' bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'
          disabled={loading}>
          {loading ? (
            <>
              <div className='ease-linear rounded-full animate-spin border-0 border-x-2 border-gray-200 h-6 w-6' />
            </>
          ) : (
            "Search"
          )}
        </button>
      </div>
      <div>
        <Display photos={photos} width={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default SearchBar;
