import classes from "./Header.module.css";

const Header = ({ userEmail, isAuthenticated, onClick }) => {
    const headerClassName = isAuthenticated ? classes.headerLogin : classes.headerLogout;
  return (
    <header className={headerClassName}>
      <h1>Pomodro Time App</h1>
      <div className={classes.btnMail}>
        {" "}
        {userEmail && <p>{userEmail}</p>}
        {isAuthenticated && (
          <button className={classes.btn} onClick={onClick}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
