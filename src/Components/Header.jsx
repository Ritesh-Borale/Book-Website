import React, { useState, useEffect } from 'react';

const Header = ({ setData, toggleFavourites,favClicked }) => {
    const [category, setCategory] = useState('fiction');
    const [searchTerm, setSearchTerm] = useState('');
    const [fromSearch, setFromSearch] = useState(false);
    const [fromCategory, setFromCategory] = useState(true);

    useEffect(() => {
        if(fromCategory){
            fetchBooks(category,'');
        }
        else{
            fetchBooks('',searchTerm);
        }
    }, [category,searchTerm,fromCategory,fromSearch]);

    const categories = [
        "Fiction", "Adventure", "Classics", "Contemporary", "Fantasy", "Historical", "Horror",
        "Literary", "Mystery", "Romance", "Science Fiction", "Thriller", "Western",
        "Biography & Autobiography", "Business & Economics", "Cooking", "Health & Fitness",
        "History", "Humor", "Politics & Government", "Religion", "Self-Help", "Travel",
        "Action & Adventure", "Animals", "Bedtime & Dreams", "Fairy Tales & Folklore",
        "Family", "Fantasy & Magic", "Science & Nature", "Social Themes", "Young Adult"
    ];

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        setFromCategory(true);
        setFromSearch(false);
        fetchBooks(selectedCategory, searchTerm);
    };

    const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        setFromSearch(true);
        setFromCategory(false);
    };

    const handleSearch = () => {
        if (fromCategory) {
            fetchBooks(category, '');
        } else if (fromSearch) {
            fetchBooks('', searchTerm);
        }
    };

    const fetchBooks = async (selectedCategory, searchValue) => {
        try {
            let url = 'https://www.googleapis.com/books/v1/volumes?q=';
            if (selectedCategory) {
                url += `subject:${selectedCategory}`;
            } else if (searchValue) {
                url += `${searchValue}`;
            }

            const response = await fetch(url);
            const booksData = await response.json();
            setData(booksData.items || []);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between fixed z-10">
            <h1 className="text-2xl font-bold text-gray-800">BookStore</h1>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="cursor-pointer appearance-none border border-gray-300 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Search
                </button>
                <button
                    onClick={toggleFavourites}
                    className="bg-gray-900 text-white rounded-lg py-2 px-4 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                >
                    {
                        favClicked?"Go Back":"Your Favourite"
                    }
                </button>
            </div>
        </header>
    );
};

export default Header;
