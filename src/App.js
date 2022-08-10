import { Route, Switch } from 'react-router-dom';

import AllBlogsPage from './pages/Allblogs';
import NewBlogPage from './pages/NewBlog';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllBlogsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewBlogPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
