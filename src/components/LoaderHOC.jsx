import { useState } from 'react';
import PropTypes from 'prop-types';
import {Spinner} from './common-components';

function LoaderHOC(WrappedComponent, options) {
  return function HOC(props) {
    const [isLoading, setIsLoading] = useState(true);
    const {
      showMessage = true,
      message = 'Please wait - this process can take a few seconds...',
      loader = <Spinner type="beat-loader" size={15} message={showMessage ? message : null} />,
    } = options;

    const setIsLoadingState = (isComponentLoading) => {
      setIsLoading(isComponentLoading);
    };
    return (
      <>
        {isLoading && loader}
        <WrappedComponent {...props} setIsLoading={setIsLoadingState} />
      </>
    );
  };
}

LoaderHOC.propTypes = {
  WrappedComponent: PropTypes.any.isRequired,
  options: PropTypes.object,
};
LoaderHOC.defaultProps = {
  options: {},
};

export default LoaderHOC;
