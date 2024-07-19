import Board from './components/board';
import Boards from './components/boards';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div style={{ paddingInline: '12px' }}>
      <Header />
      <div className='deneme'>
        <Boards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
