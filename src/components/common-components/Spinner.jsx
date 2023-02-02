import PuffLoader from 'react-spinners/PuffLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

function renderSpinnerByType(size, type) {
  switch (type) {
    case 'puff-loader':
      return <PuffLoader size={size} loading />;
    case 'bounce-loader':
      return <BounceLoader size={size} loading />;
    case 'clip-loader':
      return <ClipLoader size={size} loading />;
    case 'beat-loader':
      return <BeatLoader size={size} loading />;
    case 'pulse-loader':
      return <PulseLoader size={size} loading />;
    default:
      return null;
  }
}

function Spinner({
  size, color, type, showMask, maskType, message,
}) {
  return (
    <div className={`sweet-loading ${showMask ? 'custom-backdrop show' : ''} ${maskType !== '' ? maskType : ''}  ${type} ${color}`}>
      {renderSpinnerByType(size, type)}
      {message && (
      <div className="spinner-message">
        {message}
      </div>
      )}
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
  showMask: PropTypes.bool,
  maskType: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};
Spinner.defaultProps = {
  size: 60,
  color: 'primary',
  type: 'beat-loader',
  showMask: true,
  maskType: '',
  message: '',
};

export { Spinner };
