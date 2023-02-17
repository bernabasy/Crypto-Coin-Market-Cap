import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchFinanceData } from '../Redux/Modeling';
import Crypto from './createCrypto';

const Models = () => {
  const cryptos = useSelector((state) => state.crypto);

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filter = cryptos.filter((item) => item.Name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    if (cryptos.length === 0) dispatch(fetchFinanceData());
  }, [dispatch, cryptos.length]);

  return (
    <>
      <form className="w-100 mb-5 bg-secondary nav">
        <input
          className="input w-100 h-2"
          type="text"
          value={search}
          aria-label="search"
          placeholder=".....search you cryptos"
          onChange={handleChange}
        />
      </form>
      <div className="bg-primary text-white">
        <div className="grid1">
          {filter.map((crypto) => (
            <div key={uuidv4()}>
              <NavLink
                to={`/${crypto.id}`}
                end
                className="crypto-link"
              >
                <Crypto crypto={crypto} />
              </NavLink>
            </div>
          )) }
        </div>
      </div>
    </>
  );
};

export default Models;
