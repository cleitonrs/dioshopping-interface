import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './globalStyles';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';
import Announcement from './components/Announcement';


const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <GlobalStyle/>
          <Announcement/>
          <Header />
          <Routes />
        </Router>
      </Container> 
    </Provider>
  )
}

export default App;
