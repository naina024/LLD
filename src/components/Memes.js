import {useState, useEffect, useCallback} from 'react';
import MemeCard from './MemeCard';
import Shimmer from '../shimmer/Shimmer';


const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMemes = useCallback(async() => {
    setShowShimmer(true);
    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  }, [])

  useEffect(() => {
    fetchMemes();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMemes])


  const handleScroll = () => {
    /*  
      window.innerHeight - height of the window (current visible height)
      window.scrollY - how much is scrolled
      document.body.scrollHeight - total height of web page
    */
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight){
      fetchMemes();
    }
  }

  return (
    <div className="flex flex-wrap justify-center">
      {
        memes &&
        memes.map((meme, i) => <MemeCard key={i} data={meme} />)
      }
      {showShimmer && <Shimmer/>}
    </div>
  );
}

export default Memes;