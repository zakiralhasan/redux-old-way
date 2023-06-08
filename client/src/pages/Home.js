import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import fetchProduct from "../redux/thunk/fetchProduct";

const Home = () => {
  // const [products, setProducts] = useState()
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    // fetch("http://localhost:5000/product")
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    dispatch(fetchProduct())
  }, [dispatch])

  // const state = useSelector(state => state)
  // console.log(state)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products?.map(product => <ProductCard key={product?._id} product={product}></ProductCard>)
      }
    </div>
  );
};

export default Home;
