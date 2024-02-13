
import { Rodape } from './Rodape.jsx';

import PropTypes from 'prop-types';



export const Layout = ({ children }) => {
  return (
    <>
    

      { children }
      <Rodape/>
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
