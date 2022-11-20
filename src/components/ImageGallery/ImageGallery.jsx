import styles from './ImageGallery.module.css';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ data, setModalImage }) {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem data={data} setModalImage={setModalImage} />
    </ul>
  );
}

// ImageGallery.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       sImage: PropTypes.string,
//       bImage: PropTypes.string,
//       tags: PropTypes.string,
//     })
//   ),
//   toggleModal: PropTypes.func,
// };
