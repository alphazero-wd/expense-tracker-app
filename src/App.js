import { useEffect, useState } from 'react';
import Followers from './Followers';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [usersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchFollowers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    setUsers(data);
  };
  const lastUserIndex = usersPerPage * currentPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);
  useEffect(() => fetchFollowers(), []);

  const changePages = (e) => {
    if (e.target.classList.contains('next-btn')) {
      setCurrentPage(currentPage < usersPerPage ? currentPage + 1 : 1);
    } else if (e.target.classList.contains('prev-btn')) {
      setCurrentPage(currentPage > 1 ? currentPage - 1 : usersPerPage);
    } else if (e.target.classList.contains('page-btn')) {
      setCurrentPage(e.target.textContent);
    }
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>
      <Followers
        users={currentUsers}
        totalUsers={users.length}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        changePages={changePages}
      />
    </main>
  );
}

export default App;
