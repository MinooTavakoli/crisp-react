import CrispChat from './lib/components/CrispChat';
import './App.css';

function App() {
  const CripWebsiteId = "f2cb034e-****-****-****-ad8bea4436f5";
  return (
    <div style={{
              display:'flex', 
              flexDirection:'column',   
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>
      <p>Test Crisp Chat.</p>
       <CrispChat CripWebsiteId={CripWebsiteId} />
    </div>
  );
}

export default App;
