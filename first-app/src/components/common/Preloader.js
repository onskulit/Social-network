import preloader from '../../assets/preloader.svg';

function Preloader () {
  return (
    <div>
      <img src={ preloader } alt='spinner' />
    </div>
  )
};

export default Preloader;