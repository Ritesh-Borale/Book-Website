import React, { useState } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import FavCard from './Components/FavCard';
import DescriptionBox from './Components/DescriptionBox';

function App() {
    const [data, setData] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [favClicked, setFavClicked] = useState(false);
    const [favData, setFavData] = useState([]);

    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    const toggleFavourites = () => {
        setFavClicked(!favClicked);
    };

    return (
        <>
            <Header setData={setData} toggleFavourites={toggleFavourites} favClicked={favClicked} />
            <div className="container mx-auto py-8 px-4">
                {!selectedBook ? (
                    <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
                        {(favClicked ? favData : data).map((book, id) => (
                            favClicked ? (
                                <FavCard
                                    key={id}
                                    book={book}
                                    onSelect={() => handleBookSelect(book)}
                                    setFavData={setFavData}
                                    favData={favData}
                                />
                            ) : (
                                <Card
                                    key={id}
                                    book={book}
                                    onSelect={() => handleBookSelect(book)}
                                    setFavData={setFavData}
                                    favData={favData}
                                />
                            )
                        ))}
                    </div>
                ) : (
                    <DescriptionBox
                        title={selectedBook.volumeInfo.title}
                        author={selectedBook.volumeInfo.authors?.[0]}
                        category={selectedBook.volumeInfo.categories?.[0]}
                        description={selectedBook.volumeInfo.description || "Description not available"}
                        imageUrl={selectedBook.volumeInfo.imageLinks?.thumbnail}
                        publishDate={selectedBook.volumeInfo.publishedDate}
                        publisher={selectedBook.volumeInfo.publisher}
                        onClose={() => setSelectedBook(null)}
                        redirect={selectedBook.accessInfo.webReaderLink}
                    />
                )}
            </div>
        </>
    );
}

export default App;
