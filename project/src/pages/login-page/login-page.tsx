import { ChangeEvent, FormEvent, useState } from 'react';
import { Logo } from '../../components/logo/logo';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { validatePassword } from '../../utils';

export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const [submitForm, setSubmitForm] = useState<AuthData>({
    login: '',
    password: ''
  });

  const handleChangeInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setSubmitForm((prevForm) => ({
      ...prevForm,
      [evt.target.name]: evt.target.value
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const password = validatePassword(submitForm.password);

    if (submitForm.login && password) {
      dispatch(loginAction(submitForm));
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="login" placeholder="Email"
                  required
                  defaultValue={submitForm.login}
                  autoComplete="off"
                  onChange={handleChangeInputValue}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password"
                  title="Не должно быть пробелов"
                  pattern='[\w]{1,15}'
                  required
                  defaultValue={submitForm.password}
                  autoComplete="off"
                  onChange={handleChangeInputValue}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
