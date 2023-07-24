
import SearchBar from './components/SearchBar';
import Select from './components/Select';

import ItemsContainer from './components/ItemsContainer';
import { useSearchParams } from 'react-router-dom';


export default function App() {
  const [search, setSearch] = useSearchParams();
  
  

  return (
    <div >
      <div className="navbar bg-neutral text-neutral-content">
        <h1 className="btn btn-ghost normal-case text-xl" >ВкусВкус</h1>

        <div >
          <SearchBar />
        </div>

        <Select
          onChange={(e) => {
            search.set('sort', e.target.value);
            setSearch(search, {
              replace: true,
            });
          }}
          label="Сортировать по.."
          name="sort"
          
          options={[
            {
              label: 'Названию',
              value: 'name',
            },
            {
              label: 'Сначала дороже',
              value: 'priceDesc',
            },
            {
              label: 'Сначала дешевле',
              value: 'priceAsc',
            },
            {
              label: 'Сначала выше рейтинг',
              value: 'ratingAsc',
            },
            {
              label: 'Сначала ниже рейтинг',
              value: 'ratingAsc',
            }
            
          ]}
        />
      </div>

      <div>
        <ItemsContainer />
      </div>
    </div>
  );
}