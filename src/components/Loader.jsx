import LoaderSVG from '../assets/grid.svg'
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader__div">
        <img src={LoaderSVG} alt="loading" />
    </div>
  )
}

export default Loader