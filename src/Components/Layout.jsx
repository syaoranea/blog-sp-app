
import { Rodape } from './Rodape.jsx';

import PropTypes from 'prop-types';

import { Navheader } from './NavHeader.jsx';

export const Layout = ({ children }) => {
  return (
    <>
    
      <Navheader/>
      { children }
      <Rodape/>
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
