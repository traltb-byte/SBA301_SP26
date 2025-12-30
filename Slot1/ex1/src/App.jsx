import Container from 'react-bootstrap/esm/Container.js';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    
    <div className="d-flex flex-column min-vh-100">
    <Header />
    <Container className="flex-grow-1 py-5 text-center">
        <h1>Chào mừng đến với My Store!</h1>
        <p>Đây là nội dung chính của trang web bán hàng.</p>
    </Container>
     <Footer />
    </div>
  
  )
}

export default App
