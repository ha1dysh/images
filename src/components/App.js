import React from 'react';
import { useEffect, useState } from 'react';
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

  const loadImages = (searchValue) => {
    setSearchValue(searchValue);
    setData([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((state) => state + 1);
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    setIsLoading(true);

    try {
      const fetchData = async () => {
        const data = await fetchPics(searchValue, page);
        setData((state) => [...state, ...data]);
      };
      fetchData();
    } catch (error) {
      alert('try again');
    }

    setIsLoading(false);
  }, [searchValue, page]);

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
