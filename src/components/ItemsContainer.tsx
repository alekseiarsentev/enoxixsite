import { useItems } from '../core/hooks';
import { BarLoader } from 'react-spinners';

export default function ItemsContainer() {
    const getProducts = useItems();
    const products = getProducts.data?.products ?? [];
  
    if (getProducts.isLoading) {
      return (
        <div>
          <BarLoader height={8} width="100%" />
        </div>
      );
    }
  
    return (
      <div className="grid h-20 w-120 place-items-center">
        <div >
          {products.map((product) => {
            return (
              <div  key={product.name} >
                <a>
                  <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img
                      style={{ objectFit: 'cover', height: '120px' }}
                      alt=""
                      loading="lazy"
                      className="img flex-auto bg-gray"
                      src={product.src}
                    /></figure>
  
                    <div >
                      <b >{product.name}</b>
                      <i ></i>
                      <p >Руб{product.price / 1}</p>
                      
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }