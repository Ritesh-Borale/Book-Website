import React from "react";

function Card({ book, onSelect, setFavData, favData }) {
  const thumbnailUrl = book.volumeInfo?.imageLinks?.thumbnail || book.thumbnailUrl || 'https://via.placeholder.com/150';
  const title = book.volumeInfo?.title || book.title;
  const author = book.volumeInfo?.authors ? book.volumeInfo.authors[0] : book.author;
  const category = book.volumeInfo?.categories ? book.volumeInfo.categories[0] : book.category;

  const addToFav = () => {
    const newData = {
      thumbnailUrl: thumbnailUrl,
      title: title,
      author: author,
      category: category,
    };

    setFavData((prev) => {
      const isAlreadyFav = prev.some((favBook) => favBook.title === newData.title);
      if (isAlreadyFav) {
        return prev.filter((favBook) => favBook.title !== newData.title);
      } else {
        return [...prev, newData];
      }
    });
  };

  const isFavorite = favData.some((favBook) => favBook.title === title);

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="relative shadow-lg h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={thumbnailUrl}
          alt="card-image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <h5><b>Author :</b> {author}</h5>
        <h5><b>Category :</b> {category}</h5>
      </div>
      <div className="p-6 pt-0 flex flex-col">
        <div className="flex mb-2">
          <button
            onClick={addToFav}
            className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg ${isFavorite ? 'bg-red-900' : 'bg-gray-900'} text-white shadow-md ${isFavorite ? 'shadow-red-900/10 hover:shadow-red-900/20' : 'shadow-gray-900/10 hover:shadow-gray-900/20'} focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mx-2`}
            type="button"
          >
            {isFavorite ? 'Remove from Fav' : 'Add to Fav'}
          </button>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={onSelect}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
