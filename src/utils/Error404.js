import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        💔
      </span>
      <h1 className="heading">404 - Not Found</h1>
      <p class="guiding">Hmm, Looks like you lost!</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default Error404;
