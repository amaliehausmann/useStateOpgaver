import "./App.scss";
import { TaskSection } from "./components/TaskSection/TaskSection";
import { Button } from "./components/Button/Button";
import { Greeting } from "./components/Greeting/Greeting";
import { Todo } from "./components/Todo/Todo";
import { Modal } from "./components/Modal/Modal";
import { ModalWrapper } from "./components/Modal/ModalWrapper/ModalWrapper";
import { useState } from "react";
import { ModalButton } from "./components/Modal/ModalContent/ModalButton";
import { ModalHeader } from "./components/Modal/ModalContent/ModalHeader";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <TaskSection title="Opgave 3.1.1">
        <Button></Button>
      </TaskSection>

      <TaskSection title="Opgave 3.1.2">
        <Greeting></Greeting>
      </TaskSection>

      <TaskSection title="Opgave 3.1.3">
        <Todo></Todo>
      </TaskSection>

      <TaskSection title="Opgave 3.1.4"></TaskSection>
      <button className="buttonStyling" onClick={openModal}>
        Åben modal
      </button>
      {modalOpen && (
        <Modal>
          <ModalHeader title="Jeg er en modal header"></ModalHeader>
          <ModalButton close={closeModal}></ModalButton>
        </Modal>
      )}
      {modalOpen && <ModalWrapper></ModalWrapper>}
    </>
  );
}

export default App;
