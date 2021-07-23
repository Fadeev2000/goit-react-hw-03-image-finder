import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        input: '',
    }

    handleInput = e => {
        this.setState({ input: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        //console.log('this.state.input', this.state.input);
        this.props.onSubmit(this.state.input);
        this.resetInput();
    }

    resetInput() {
        this.setState({ input: '' })
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchForm__button}>
                        <span className={css.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={css.SearchForm__input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.input}
                        onChange={this.handleInput}
                    />
                </form>
            </header>
        )
    }

}

export default Searchbar;