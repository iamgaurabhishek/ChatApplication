import './App.css';
import AuthForm from './modules/AuthForm';
import Dashboard from './modules/Dashboard';

function App() {
  return (
    <div className='bg-[#edf3fc] h-screen flex justify-center items-center'>
      {/* <AuthForm /> */}
      <Dashboard />
    </div>
  );
}

export default App;
