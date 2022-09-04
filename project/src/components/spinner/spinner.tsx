import './spinner.css';

export function Spinner(): JSX.Element {
  return (
    <div className="spinner" data-testid="spinner-element">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
