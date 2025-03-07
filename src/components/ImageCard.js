import React, { useEffect, useState } from "react";

function ImageCard({ image }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const allTags = image.tags.split(",");
    setTags(...tags, allTags);
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="random-image" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tags}
        </span>
      </div>
    </div>
  );
}

export default ImageCard;
