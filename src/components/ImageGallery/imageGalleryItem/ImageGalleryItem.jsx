// import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ data, setModalImage }) {
  return data.map(({ id, sImage, bImage, tags }) => {
    return (
      <li className={styles.ImageGalleryItem} key={id}>
        <img
          onClick={() => setModalImage(bImage)}
          className={styles.GalleryImage}
          src={sImage}
          alt={tags}
        />
      </li>
    );
  });
}

// ImageGalleryItem.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       sImage: PropTypes.string,
//       bImage: PropTypes.string,
//       tags: PropTypes.string,
//     })
//   ),
// };
