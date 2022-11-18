import React, { useEffect, useState } from "react";
import { IconLoading } from "./assets";
import { Card } from "./components";
import { GetSearchMovies } from "./services";
import GetPopularMovies from "./services/GetPopularMovies";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const updateData = async () => {
    setLoading(true);
    const response = await GetSearchMovies(search);
    setData(response.data.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await GetPopularMovies();
      setData(response.data.results);
    };
    getData();
    setLoading(false);
  }, []);

  return (
    <>
      <div className={`bg-gray-800`}>
        <div className={`max-w-md mx-auto`}>
          <div className={`py-10 px-4 min-h-screen`}>
            <div className={`space-y-8`}>
              <h1 className={`text-3xl text-center font-bold text-gray-100`}>
                Rz Movie's
              </h1>
              <div className={`flex items-center gap-2`}>
                <input
                  type={`text`}
                  placeholder={`Search Movie ...`}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`w-full outline-none text-sm py-2.5 px-3 rounded border border-gray-500 focus:ring-4 focus:ring-blue-500 duration-300`}
                />
                <button
                  className={`py-2.5 px-3 rounded bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 duration-300`}
                  onClick={updateData}
                  disabled={!search}
                >
                  <span className={`text-sm font-semibold text-gray-50`}>
                    Search
                  </span>
                </button>
              </div>
              <div className={`grid grid-cols-2 gap-4`}>
                {data?.map((movie) => (
                  <Card key={movie.id} data={movie} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          !loading && "hidden"
        } fixed z-50 inset-0 bg-black/50 backdrop-blur`}
      >
        <div className={`h-full flex items-center justify-center`}>
          <IconLoading className={`w-12 h-12 stroke-gray-50 animate-spin`} />
        </div>
      </div>
    </>
  );
};

export default App;
