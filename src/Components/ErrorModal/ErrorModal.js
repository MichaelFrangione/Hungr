import React from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 250px;
  background: ${({ theme }) => theme.background};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px;
`;

const ErrorModal = props => {
  return (
    <Modal open={true}>
      <ModalWrapper>
        <ModalContent>
          <Typography variant="h3" gutterBottom>
            An error has occured
          </Typography>
          <Typography variant="h4">Please try again at a later.</Typography>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default ErrorModal;
