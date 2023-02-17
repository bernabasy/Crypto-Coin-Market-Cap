import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFinanceData } from '../Redux/Modeling';

const Details = () => {
  const cryptos = useSelector((state) => state.crypto);
  const { id } = useParams();
  const filter = cryptos.filter((crypto) => (crypto.id === id));
  const dispatch = useDispatch();
  useEffect(() => {
    if (cryptos.length === 0) dispatch(fetchFinanceData());
  }, [dispatch, cryptos.length]);

  return (
    <div>
      <div className="flex bg-primary text-white h-100 w-100 border">
        <div className=" w-100">
          <img className="images ml-50 w-100 w" src={`https://www.cryptocompare.com${filter[0].img} `} alt="symbol" />
        </div>
        <div className="d-flex w justify-content-center">
          <div>
            <p>
              <span className="m-3 border border-primary ">Name:</span>
              {filter[0].Name}
            </p>
            <p />
            <p>
              <span className="m-3 border border-primary ">
                AVERAGE PRICE:
              </span>
              {filter[0].price}
            </p>
            <p>
              <span className="m-3 border border-primary ">
                TODAYS LOWEST PRICE:
              </span>
              {filter[0].lowDay}
            </p>
            <p>
              <span className="m-3 border border-primary ">
                TODAYS HIGHEST PRICE:
              </span>
              {filter[0].highDay}
            </p>
            <div className="gap-5  border border-primary ">
              <span className="m-3 border border-primary ">
                ALGORITHM:
              </span>
              { filter[0].algo }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
