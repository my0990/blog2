import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Test from './components/common/Test';
import FirstPostPage from './pages/FirstPostPage';
import Editor from './pages/Editor';
import HeaderContainer from './containers/HeaderContainer';
import ViewPage from './pages/ViewPage';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route  element={<HeaderContainer />}>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/firstPostPage" element={<FirstPostPage />} /> */}
          <Route path="/edit" element={<Editor />} />
          <Route path="/firstPostPage/view" element={<ViewPage />} />
        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
