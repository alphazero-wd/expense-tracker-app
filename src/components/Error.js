import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className="page-error">
      <h1>404 Not Found</h1>
      <Link to="/" className="btn">
        Back To Movies
      </Link>
    </div>
  );
};

export default Error;
