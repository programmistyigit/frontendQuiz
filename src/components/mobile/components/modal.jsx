import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { remove } from '../../../stories/currentQuiz';

function ModalQuiz({allTest , setNavigate ,show , setShow, succesNumber}) {
    const distpatch = useDispatch()
    const handleClose = () =>{
        setShow(false)
        distpatch(remove())
        setNavigate(true)
    };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Test javoblari</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Umumiy test soni : {allTest}
          <br />
          Topilgan test soni : {succesNumber}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalQuiz;