
import { Rodape } from './Rodape.jsx'
import { Topo } from './Topo.jsx'
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <>
    
      <Topo/>
      { children }
      <Rodape/>
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
