import styles from './Buttons.module.scss';

const Buttons = props => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.children}</button>
    );
};

export default Buttons;