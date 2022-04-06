import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const Modal = (props) => {

	const portalOverlays = document.getElementById("overlays")

	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalOverlays)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalOverlays )}
		</Fragment>
	)
}

export default Modal;