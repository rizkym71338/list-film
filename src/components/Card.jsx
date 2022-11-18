import React from "react";
import { IconStar } from "../assets";

const Card = ({ data }) => {
  return (
    <div className={`relative rounded border border-gray-700 overflow-hidden`}>
      <div className={`absolute inset-0 z-10 bg-black/30`}>
        <div className={`h-full p-2 flex flex-col justify-end`}>
          <h1 className={`text-sm font-bold text-gray-300`}>{data.title}</h1>
          <div className={`flex items-center justify-between`}>
            <p className={`text-xs font-normal text-gray-400`}>
              {data.release_date}
            </p>
            <div className={`flex items-center gap-1`}>
              <IconStar className={`w-4 h-4 fill-yellow-500`} />
              <span className={`text-xs font-semibold text-gray-300`}>
                {data.vote_average}
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
        alt={data.title}
        className={`relative z-0 w-full bg-gray-900`}
      />
    </div>
  );
};

export default Card;
