import { useState } from 'react';
import { fetchPics } from '../services/fetchAPI';

import styles from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [modalImage, setModalImag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadImages = async (searchValue) => {
    setIsLoading(true);

    const data = await fetchPics(searchValue);
    console.log(data);

    if (data.length === 0) {
      alert('Incorrect request');
      return;
    }

    setSearchValue(searchValue);
    setData(data);
    setPage(1);
    setIsLoading(false);
  };

  const loadMore = async () => {
    setIsLoading(true);

    const data = await fetchPics(searchValue, page + 1);

    setData((state) => [...state, ...data]);
    setPage((state) => state + 1);
    setIsLoading(false);
  };

  const toggleModal = (modalImage = '') => {
    setModalImag(modalImage);
  };

  const isModalOpen = modalImage.length > 0;

  return (
    <div className={styles.App}>
      <SearchBar loadImages={loadImages} />

      {data.length > 0 && (
        <ImageGallery data={data} toggleModal={toggleModal} />
      )}

      {isLoading && <Loader />}

      {data.length > 0 && <Button onLoadMore={loadMore} />}

      {isModalOpen && (
        <Modal modalImage={modalImage} toggleModal={toggleModal} />
      )}
    </div>
  );
}
