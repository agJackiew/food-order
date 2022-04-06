import styles from './ModalOverlay.module.scss';

const ModalOverlay = (props) => {

	return (
		<div className={styles.modal}>
			<div>{props.children}</div>
		</div> 
	)
}

export default ModalOverlay;