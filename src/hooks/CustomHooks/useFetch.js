import React, {useState, useEffect} from 'react';

const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 4000);
    // getData();
  }, []);
  const getData = () => {
    fetch()
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      });
  };
  return data;
};

export default useFetch;
