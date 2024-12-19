// Using next/navigation in Server Components
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for Server Components

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center p-2 ">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-grow px-4 border-primary border-dashed border-2"
            />
            <button
                type="submit"
                className="px-4  text-white  hover:bg-blue-600 border-2 bg-primary border-primary"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
