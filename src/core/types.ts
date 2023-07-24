export type Product = {
    name: string;
    
    price: number;
    
    src: string;
    rating: number;
  };
  
  export type ProductRespone = {
    products: Product[];
    maxPrice: number;
    maxRating: number;
  };
  
  export type ProductSort = 'name' | 'priceAsc' | 'priceDesc' | 'ratingAsc' | 'ratingDesc';