import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Accordion from './components/Accordion';
import AutoSearch from './components/AutoSearch';
import ImageSlider from './components/image-slider/ImageSlider';
import Login from './components/Login';
import Memes from './components/Memes';
import NestedComments from './components/NestedComments/NestedComments';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const [lang, setLang] = useState('en');

  return (
    <div>
      <header className='bg-gray-800 text-white flex justify-between px-4 py-6'>
        Routing/ShimmerUI/InfiniteScroll
        <nav className='flex gap-4'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/autosearch'>Auto-Search</a>
          <a href='/accordion'>Accordion</a>
          <a href='/nested-comments'>Nested-Comments</a>
          <a href='/image-slider'>Image-Slider</a>
          <a href='/login'>Login</a>
        </nav>

        <select className='text-black'
          value={lang}
          onChange={(e) => {setLang(e.target.value)}}
        >
          <option value={'en'}>English</option>
          <option value={'hi'}>Hindi</option>
          <option value={'sp'}>Spanish</option>
          <option value={'ja'}>Japanese</option>
        </select>

      </header>

      {/* 
        Note - Routing is helpful in SEO. Be careful while updating routes as users may have bookmarked the URLs, which may lead to 404 if changed.
      */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Memes/>} />
          <Route element={<ProtectedRoute/>}>
            <Route path='/about' element={<About lang={lang} />} />
            <Route path='/autosearch' element={<AutoSearch/>} />
          </Route>
          <Route path='/accordion' element={<Accordion/>} />
          <Route path='/nested-comments' element={<NestedComments/>} />
          <Route path='image-slider' element={<ImageSlider/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
