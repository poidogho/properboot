import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomes } from '../../store/actions/home-actions';
import { Home } from './models';
import { RootState } from '../../store/store';

const Homes = () => {
  const dispatch = useDispatch();
  const homes = useSelector<RootState, Home[]>((state) => state.homes.homes);

  useEffect(() => {
    dispatch(getHomes());
  }, [dispatch]);

  return (
    <div>
      <h1>Properly Homes</h1>
      {homes && homes.length
        ? homes.map((home) => <h2 key={home.id}>{home.address}</h2>)
        : undefined}
    </div>
  );
};

export default Homes;
