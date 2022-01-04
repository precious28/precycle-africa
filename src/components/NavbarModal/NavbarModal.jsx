import {Modal, Stack, Container} from 'react-bootstrap';
import "../NavbarModal/NavbarModal.css";

// images
import Calendar from '../NavbarModal/modalImages/Calendar.png';
import Form from '../NavbarModal/modalImages/Form.png';
import Phone from '../NavbarModal/modalImages/Phone.png';
import Whatsapp from '../NavbarModal/modalImages/Whatsapp.png';
// import closeModal from '../NavbarModal/modalImages/closeModal.png';

function NavbarModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      
        <Modal.Body className="mb-5 customBackground">
        <Modal.Header className="closeModal"  closeButton>
        {/* <img src={closeModal} alt="" /> */}
        </Modal.Header>
        <Stack gap={3} className="align-items-center justify-content-center text-center">
            <Container fluid="md">     
            <img src={Calendar} className="calendarImage" alt="" />
            <div className=" fw-bold mySecondary fs-3 mt-4">Schedule your plastic waste pickup</div>
            <div className="mt-4 mb-4">We collect Pure Water sachets, PET plastic bottles
            (PET), and other plastic products.</div>
            <div className="mb-4">Contact us to pickup your plastic waste using any of the following medium:</div>
            <Stack gap={3} >
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
            <img src={Form} className="icons" alt="" />
                <div className="iconDecoration primaryText fs-5 fw-bold">Fill a Form</div>
            </Stack>
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                <img src={Phone} className="icons" alt="" />
                <div className="iconDecoration primaryText fs-5  fw-bold">Speak to a Representative</div>
            </Stack>
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                <img src={Whatsapp} className="icons" alt="" />
                <div className="iconDecoration primaryText fs-5 fw-bold">Chat on Whatsapp</div>
            </Stack>
            </Stack>
            
            </Container>
        </Stack>
        </Modal.Body>
      </Modal>
    );
  }
  
  
  export default NavbarModal;