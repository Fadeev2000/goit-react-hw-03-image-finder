import css from './Button.module.css'

function Button() {
    return (
        <div className={css.div__button}>
            <button type="button" className={css.Button}>Load more...</button>
        </div>
    );
}

export default Button;