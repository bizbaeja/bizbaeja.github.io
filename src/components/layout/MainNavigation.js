import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tilog Pot</div>
      <div className={classes.bizbaeja}>_bizbaeja</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Blogs</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Blog</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
