import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products,setProducts]=  useState([])
  const [page,setPage]= useState(2)

  const change= (t)=>{
    setPage(t)


  }

  const fetchproducts= async () => {

    let res = await fetch(`https://dummyjson.com/products?limit=100`)
    let data =  await res.json()


    if(data && data.products){

      setProducts(data.products);
    }
    
  }
  console.log(products);
useEffect(() => {
  fetchproducts()
}, [])

  return (
    <>

    {products.slice(page*10-10,page*10).map((items)=>{
     return <div>
        <img src={ items.thumbnail}  alt="img-product" />
        <div> Product :{ items.title} </div>
        <div>Price : { items.price}  </div>
        <div> Rating : { items.rating}  </div>

      </div>

    })}


    <div className="paginationBtns"  style={{display:'flex' , margin:'200px'}}>
      <div className="left">⬅️</div  >
      {[...Array(products.length/10)].map((_,indx)=>{
        return <div onClick={()=>change(indx+1)}  style={{margin:'10px'}}>
          {indx+1}

          </div>
      })}
      <div className="right">▶️</div>
    </div>


    </>
  );
}

export default App;


