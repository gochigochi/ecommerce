import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const param = useParams();

  useEffect(() => {
    setLoading(true);
    if (Object.keys(param).length === 0) {
      fetch('https://fakestoreapi.com/products?limit=20')
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      fetch(`https://fakestoreapi.com/products/category/${param.cat}`)
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [param]);

  return (
    <div>
      {!loading ? (
        <ul>
          {products.map((item, index) => {
            return (
              <div key={index} style={{ border: '1px solid #ededed' }}>
                <p>{item.title}</p>
                <p>Category: {item.category}</p>
              </div>
            );
          })}
        </ul>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default ListContainer;
