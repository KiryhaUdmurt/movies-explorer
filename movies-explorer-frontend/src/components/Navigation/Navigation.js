import { NavLink, useLocation } from "react-router-dom";
import profileLogo from "../../images/icon__COLOR_icon-main.svg";
import "./Navigation.css";

function Navigation({ menuActive, setActive, isLoggedIn }) {
  const location = useLocation();
  const whiteTextClass = `${location.pathname === "/" && "navigation_white"}`;
  const currentPage = (path) => {
    return location.pathname === `/${path}` && "navigation__current-page";
  };
  return (
    <div className="naviagtion">
      {!isLoggedIn && (
        <nav className="navigation__unlogged">
          <NavLink className="navigation__registration" to="/signup">
            Регистрация
          </NavLink>
          <NavLink className="navigation__login" to="/signin">
            Войти
          </NavLink>
        </nav>
      )}
      {isLoggedIn && (
        <>
          <button
            onClick={() => setActive(!menuActive)}
            className="navigation__burger-btn"
            type="button"
            aria-label="Всплывающее меню"
          />
          <nav className="navigation__logged">
            <div className="navigation__movies-links">
              <NavLink
                className={`navigation__movies ${whiteTextClass} ${currentPage(
                  "movies"
                )}`}
                to="/movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                className={`navigation__saved-movies ${whiteTextClass} ${currentPage(
                  "saved-movies"
                )}`}
                to="/saved-movies"
              >
                Сохраненные фильмы
              </NavLink>
            </div>
            <NavLink className="navigation__profile" to="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="32"
                fill="none"
                className="naviagtion__profile-img"
              >
                <rect
                  width="98"
                  height="30"
                  x="1"
                  y="1"
                  stroke="#AAA"
                  strokeWidth="2"
                  opacity=".2"
                  rx="15"
                />
                <path
                  className={whiteTextClass}
                  fill="#000"
                  d="M32.979 21h-1.631l3.664-10.182h1.775L40.45 21h-1.63l-2.88-8.332h-.079L32.98 21Zm.273-3.987h5.29v1.292h-5.29v-1.292ZM41.802 21v-7.636h1.486v3.201h.716l2.521-3.201h1.84l-2.959 3.713L48.4 21h-1.844l-2.302-3.053h-.965V21h-1.486Zm7.752 0v-7.636h1.486v3.201h.716l2.521-3.201h1.84l-2.959 3.713L56.151 21h-1.844l-2.302-3.053h-.965V21h-1.486Zm9.974.169a3.12 3.12 0 0 1-1.312-.268 2.211 2.211 0 0 1-.93-.79c-.225-.346-.338-.768-.338-1.269 0-.43.083-.785.249-1.064.165-.278.389-.498.67-.66.282-.163.597-.286.945-.369a9.387 9.387 0 0 1 1.064-.189l1.114-.129c.285-.036.492-.094.621-.174.13-.08.194-.209.194-.388v-.034c0-.435-.122-.771-.368-1.01-.242-.238-.603-.358-1.084-.358-.5 0-.894.111-1.183.333-.285.22-.482.463-.591.731l-1.397-.318c.165-.464.407-.838.725-1.123a2.942 2.942 0 0 1 1.11-.627 4.327 4.327 0 0 1 1.317-.199c.305 0 .628.037.97.11.344.07.665.198.964.387.301.19.548.46.74.81.193.349.289.801.289 1.358V21h-1.452v-1.044h-.06c-.096.192-.24.381-.432.567-.192.185-.44.34-.741.462-.302.123-.663.184-1.084.184Zm.323-1.193c.411 0 .763-.081 1.054-.244.295-.162.52-.374.672-.636a1.65 1.65 0 0 0 .233-.85v-.985c-.053.053-.156.103-.308.15a4.81 4.81 0 0 1-.512.114c-.192.03-.38.058-.562.084l-.457.06a3.688 3.688 0 0 0-.79.184c-.236.086-.425.21-.567.373-.14.159-.21.371-.21.636 0 .368.136.647.408.835.272.186.619.279 1.04.279Zm6.092 3.888c-.222 0-.424-.019-.607-.055a1.912 1.912 0 0 1-.407-.11l.358-1.218c.271.073.513.105.725.095.213-.01.4-.09.562-.239.166-.149.312-.392.438-.73l.184-.508-2.794-7.735h1.59l1.934 5.926h.08l1.934-5.926h1.596l-3.147 8.655a3.452 3.452 0 0 1-.557 1.01 2.16 2.16 0 0 1-.805.626c-.312.139-.673.209-1.084.209Zm12.165-7.323v1.287h-4.136v-1.287h4.136Zm-3.718-3.177V21h-1.457v-7.636h1.457Zm4.757 0V21h-1.451v-7.636h1.451Zm1.042 1.282v-1.282h6.443v1.282h-2.49V21H82.69v-6.354h-2.501Z"
                />
                <path
                  className={whiteTextClass}
                  fill="#000"
                  fillRule="evenodd"
                  d="M20 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6 5a4 4 0 0 0-4 4v1h2v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          </nav>
        </>
      )}
    </div>
  );
}

export default Navigation;
