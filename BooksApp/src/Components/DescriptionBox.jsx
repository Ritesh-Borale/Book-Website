import React from 'react';
const DescriptionBox = ({ title, author, category, description, imageUrl, publishDate, publisher, onClose,redirect }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex justify-end">
                <button
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={onClose}
                >
                    &#x2715;
                </button>
            </div>
            <div className="flex mt-4">
                <div className="flex-none w-1/3 pr-8">
                    <img src={imageUrl} alt="Book Cover" className="h-auto w-full rounded-lg shadow-lg" />
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                    <p className="text-lg text-gray-600">by {author}</p>
                    <br />
                    <p className="text-lg text-gray-600">Category: {category}</p>
                    <br />
                    <p className="text-lg text-gray-600">{description}</p>
                    <div className="mt-6">
                        <p className="text-sm text-gray-600">Publishing Date: {publishDate}</p>
                        <p className="text-sm text-gray-600">Publisher: {publisher}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href={redirect} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                            Read Online
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionBox;
