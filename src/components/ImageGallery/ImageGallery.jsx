import styles from './ImageGallery.module.css';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ data, toggleModal }) {
  const findBigImage = (event) => {
    data.map((element) => {
      const findImageFromDataArray =
        event.target.currentSrc === element.sImage;

      if (findImageFromDataArray) {
        return toggleModal(element.bImage);
      }
      return element;
    });
  };

  return (
    <ul
      className={styles.ImageGallery}
      onClick={(event) => findBigImage(event)}
    >
      <ImageGalleryItem data={data} />
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
