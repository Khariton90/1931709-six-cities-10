import cn from 'classnames';
import { memo, useState } from 'react';
import { sortOptions } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { sortOffers } from '../../store/action';

type SortingOptionsProps = {
  sortType: string
}

function SortingOptions({sortType}: SortingOptionsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [openSort, setOpenSort] = useState(false);

  const handleChangeActiveClass = (option: string) => {
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
              data-testid="sort-element"
              onClick={() => handleChangeActiveClass(key)}
              key={value}
              className={cn('places__option', {'places__option--active': sortType === key})}
              tabIndex={0}
              aria-current={sortType === key}
            >{value}
            </li>
          ))
        }
      </ul>
    </ form>
  );
}

export default memo(SortingOptions);
