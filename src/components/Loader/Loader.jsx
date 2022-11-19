import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center' }}>
      <RotatingLines width="32" strokeColor="#3f51b5" />
    </div>
  );
}
