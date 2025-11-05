import { useState } from "react";

function Search() {
const [query, setQuery] = useState("");

const handleSearch = () => {
    alert(`Searching for Your Need: ${query}`);
};

return (
    <div className="flex justify-center mb-6">
    <input
        type="text"
        placeholder="Searching..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-l px-3 py-2 w-60"
    />
    <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
    >
        Search
    </button>
    </div>
);
}

export default Search;