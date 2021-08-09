import Modal from './components/Modal';
import Form from './components/Form';
import Quiz from './components/Quiz';
import { useGlobalContext } from './context';
const App = () => {
  const { setup, loading } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <>
      <main>
        {setup && <Form />}
        {!setup && <Quiz />}
      </main>
      <Modal />
    </>
  );
};

export default App;
