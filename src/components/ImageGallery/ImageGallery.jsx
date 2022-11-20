import styles from './ImageGallery.module.css';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ data, setModalImage }) {
  // const findBigImage = ({ target }) => {
  //   data.map((element) => {
  //     const findImageFromDataArray =
  //       target.currentSrc === element.sImage;

  //     if (findImageFromDataArray) {
  //       return toggleModal(element.bImage);
  //     }
  //     return element;
  //   });
  // };

  return (
    <ul
      className={styles.ImageGallery}
      // onClick={(e) => findBigImage(e)}
    >
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
