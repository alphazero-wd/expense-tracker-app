import { useGlobalContext } from '../context';
const Modal = () => {
  const { score, questions, showModal, setSetup, setShowModal } =
    useGlobalContext();
  return (
    <div className={`modal-container ${showModal && 'isOpen'}`}>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>
          You answered {Math.round((score / questions.length) * 100)}% of the
          questions correctly
        </p>
        <button
          className="close-btn"
          onClick={() => {
            setSetup(true);
            setShowModal(false);
          }}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
