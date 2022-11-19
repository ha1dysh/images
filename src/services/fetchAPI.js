export const fetchPics = (inputValue, page = 1) => {
  const url = 'https://pixabay.com/api/?';
  const key = 'key=29047277-0724bcb122d706f43fd943a42';
  const options =
    '&image_type=photo&orientation=horizontal&per_page=12';

  const serverRequest = `${url}${key}&q=${inputValue}&page=${page}${options}`;

  return fetch(serverRequest)
    .then((e) => e.json())
    .then((response) =>
      response.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return {
            id,
            sImage: webformatURL,
            bImage: largeImageURL,
            tags,
          };
        }
      )
    );
};
