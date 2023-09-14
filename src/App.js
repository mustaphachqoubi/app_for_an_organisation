import { Navbar, DepartSection, ArriveeSection, NotifSection} from './components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


function App() {
  const { mood } = useSelector(state => state.mood)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className={`${mood === "dark" ? "dark_app" : "app"}`}>
    <Routes>
      <Route path='/notifications' element={<NotifSection />} />
      <Route index path='/depart' element={<DepartSection />} />
      <Route path='/' element={<Navigate to={"/depart"} />} />
      <Route path='/arrivee' element={<ArriveeSection />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;