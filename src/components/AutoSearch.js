import { useEffect, useState, useCallback } from "react";

const AutoSearch = () => {
    const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = useCallback(async () => {
    // Return from cache if already fetched
    if (cache[searchText]){
      setSearchResults(cache[searchText]);
      return;
    }
    const data  = await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchText}`);
    const json = await data.json();
    setSearchResults(json[1]);
    // Caching
    setCache({...cache, [searchText]: json[1]});
  }, [cache, searchText])

  useEffect(() => {
    // Debouncing
    const st = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(st);
  }, [searchText, fetchData]);

  

  return (
    <div className="m-10 flex flex-col content-center flex-wrap">
      <h4 className="m-8 flex justify-center text-gray-700">Autocomplete/Typeahead Search</h4>
      <input
        className="border-2 border-gray-600 rounded-sm p-1 w-96"
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultsVisible(true)}
        onBlur={() => {setIsResultsVisible(false)}}
      />
      {
        searchResults.length>1 && isResultsVisible &&
        <ul className="border border-black p-1 w-96 rounded-sm">
          {
            searchResults.map(
              (res) => 
                <li key={res} className="hover:bg-gray-200 cursor-pointer">
                  {res}
                </li>
            )
          }
        </ul>
      }
    </div>
  );
}

export default AutoSearch;