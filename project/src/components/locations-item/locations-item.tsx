type LocationsItemProps = {
  state: string
}

export function LocationsItem({ state}:LocationsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/">
        <span>{state}</span>
      </a>
    </li>
  );
}
