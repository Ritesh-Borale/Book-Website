import React from "react";


function Favourites() {
    return (
        <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
            {data.map((book, id) => (
                <Card key={id} book={book} onSelect={() => handleBookSelect(book)} setFavData={setFavData} data={favData} />
            ))}
        </div>
    )
}

export default Favourites;