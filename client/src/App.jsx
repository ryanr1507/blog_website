import './App.css';
import { Layout } from './components/Layout';
import {Routes, Route} from "react-router-dom"
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UserContextProvider } from './UserContext';
import { CreatePost } from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';



function App() {
  return (

    <UserContextProvider>
      <Routes>

        <Route index path={'/login'} element={<Login />}/>
        <Route path={'/register'} element={<Register />}/>

        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path={'/create'} element={<CreatePost />}/>
          <Route path={'/post/:id'} element={<PostPage />}/>
          <Route path={'/edit/:id'} element={<EditPost />}/>
        </Route>

      </Routes>
    </UserContextProvider>

  );
}

export default App;
