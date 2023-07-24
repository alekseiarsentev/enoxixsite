

import { useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';

export default function SearchBar() {
    
    const [search, setSearch] = useSearchParams();
    const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
  
      if (text.length === 0) {
        search.delete('query');
        setSearch(search, {
          replace: true,
        });
      } else {
        search.set('query', text);
        setSearch(search, {
          replace: true,
        });
      }
    }, 350);
  
    return (
      <div
        
      >
        <label htmlFor="search" >
          
        </label>
        <input
          
          onChange={onSearchChange}
          defaultValue={search.get('query') ?? ''}
          id="search"
          name="search"
          className="input w-full max-w-xs"
          type="search"
          placeholder="Поиск по названию"
        />
      </div>
    );
  }