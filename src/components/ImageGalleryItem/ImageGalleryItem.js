import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ galleryImage }) {
    console.log(galleryImage);
    return (



        galleryImage.map(el => (
            <li className={css.ImageGalleryItem} key={el.id}>
                <img src={el.webformatURL} alt="" className={css.ImageGalleryItem__image} />
            </li >
        ))



    );
}

export default ImageGalleryItem;