import { useForm } from 'react-hook-form';
import styles from './SearchBar.module.css';

export default function SearchBar({ loadImages }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    if (e.searchReq.trim() === '') {
      alert('Incorrect request');
      reset();
      return;
    }

    loadImages(e.searchReq);
    reset();
  };

  return (
    <header className={styles.Searchbar}>
      <form
        className={styles.SearchForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className={styles.SearchFormButton}
          type="submit"
        ></button>
        <input
          className={styles.searchFormInput}
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          {...register('searchReq')}
        />
      </form>
    </header>
  );
}
