import cn from 'classnames';
import { useState } from 'react';
import { sortOptions } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../store/action';

export function SortingOptions(): JSX.Element {
  const [openSort, setOpenSort] = useState(false);
  const dispatch = useAppDispatch();

  const sortType = useAppSelector((state) => state.sortType);

  const setActiveClassHandler = (option: string) => {
    dispatch(sortOffers(option));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenSort((prev) => !prev)}>
        {sortOptions[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened': openSort})}>
        {
          Object.entries(sortOptions).map(([key, value]) => (
            <li
              onClick={() => setActiveClassHandler(key)}
              key={value}
              className={cn('places__option', {'places__option--active': sortType === key})}
              tabIndex={0}
            >{value}
            </li>
          ))
        }
      </ul>
    </ form>
  );
}
