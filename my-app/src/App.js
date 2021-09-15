import './App.css';
import Home from './components/Home';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="Container">
      <Home />
      <Heading content="We do YAY things" color="pink" fontSize="30" />
      <Paragraph content="Nam tincidunt, sapien nec congue porta, 
      tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
      Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, 
      aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, 
      efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, 
      sollicitudin in luctus a, varius eget massa."/>
    </div>
  );
}

export default App;
