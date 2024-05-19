import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SinglePost from "./pages/SinglePost";


function App() {
	const projectName = "Test Project"
  return (
    <div className="App">
      <Header/>
		<div className="main">
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/" element={<MainPage data={projectName}/>} />
      </Routes>
			
		</div>
		<Footer/>
    </div>
  );
}

export default App;
