//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import * as constants from './constants/constants'
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

console.log('constants', constants);
//const shearch = 'cat';
const numberPage = 1;
//const KEY = '21866495-a4c1c3569eb1cc45a894346f5';
//const url = `${constants.BASE_URL}?q=${shearch}&page=${numberPage}&key=${constants.KEY}&image_type=photo&orientation=horizontal&per_page=${constants.PAGINATION}`;
//const url = `https://pixabay.com/api/?q=cat&page=1&key=21866495-a4c1c3569eb1cc45a894346f5&image_type=photo&orientation=horizontal&per_page=12`;

class App extends Component {
  state = {
    galleryImage: []
  }

  componentDidMount() {
    //console.log('this.searchInputValue', this.searchInputValue());

  }

  searchInputValue = input => {
    console.log('input', input);

    fetch(`${constants.BASE_URL}?q=${input}&page=${numberPage}&key=${constants.KEY}&image_type=photo&orientation=horizontal&per_page=${constants.PAGINATION}`)
      .then(res => res.json())
      .then(data => {
        //console.log('data', data.hits)
        const arrImgs = data.hits.map(({ id, webformatURL, largeImageURL }) => {
          //console.log(el);
          return { id, webformatURL, largeImageURL };
        });
        //console.log('arrImgs', arrImgs);
        this.setState({ galleryImage: arrImgs });
        //console.log('this.setState', this.state);
      })
      ;



    //return input;
  };

  componentDidUpdate() { }


  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchInputValue} numb={10} />
        {this.state.galleryImage.length > 0 && (
          <>
            <main>
              <ImageGallery galleryImage={this.state.galleryImage} />
              <Button />
            </main>
          </>
        )}

      </>
    );
  }


}

export default App;
