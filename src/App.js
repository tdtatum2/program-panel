import Container from 'react-bootstrap/Container';
import LeaguesMobile from './components/LeaguesMobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Container fluid className='p-0'>
      <div className="mobile-layout">
        <LeaguesMobile />
      </div>
      <div className="desktop-layout">
        
      </div>
    </Container>
  );
}

export default App;
