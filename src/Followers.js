const Followers = ({
  users,
  totalUsers,
  usersPerPage,
  changePages,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="followers">
      <div className="container">
        {users.map((user) => {
          const { id, html_url, avatar_url, login } = user;
          return (
            <article className="card" key={id}>
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url} className="btn">
                View Profile
              </a>
            </article>
          );
        })}
      </div>
      <div className="btn-container">
        <button className="prev-btn" onClick={changePages}>
          prev
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-btn ${number == currentPage && 'active-btn'}`}
            onClick={changePages}
          >
            {number}
          </button>
        ))}
        <button className="next-btn" onClick={changePages}>
          next
        </button>
      </div>
    </section>
  );
};

export default Followers;
