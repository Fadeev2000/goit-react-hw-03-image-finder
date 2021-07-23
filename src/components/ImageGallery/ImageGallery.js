import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css';

function ImageGallery({ galleryImage }) {
    return (
        <ul className={css.ImageGallery}>
            <ImageGalleryItem galleryImage={galleryImage} />
        </ul>
    );
}

export default ImageGallery;