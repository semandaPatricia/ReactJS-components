import "../search/SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};