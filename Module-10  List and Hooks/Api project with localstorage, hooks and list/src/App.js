import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Project from "./Website/Pages/Project";
import Contact from "./Website/Pages/Contact";
import ADashboard from "./Admin/APages/ADashboard";
import AService from "./Admin/APages/AService";
import AProject from "./Admin/APages/AProject";
import AContact from "./Admin/APages/AContact";
import AAbout from "./Admin/APages/AAbout";
import AServiceManage from "./Admin/APages/AServiceManage";
import AProjectManage from "./Admin/APages/AProjectManage";
import Alogin from "./Admin/APages/Alogin";
import Ulogin from "./Website/Pages/Ulogin";
// import AfterLoginHeader from "./Admin/AComponents/AfterLoginHeader";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Home /> </>} />
          <Route path="/about" element={<> <About /> </>} />
          <Route path="/service" element={<> <Service /> </>} />
          <Route path="/project" element={<> <Project /> </>} />
          <Route path="/contact" element={<> <Contact /> </>} />
          <Route path="/ulogin" element={<> <Ulogin /> </>} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<> <ADashboard /> </>} />
          {/* <Route path="/afterloginheader" element={<> <AfterLoginHeader /> </>} /> */}
          <Route path="/aabout" element={<> <AAbout /> </>} />
          <Route path="/service-addservice" element={<> <AService /> </>} />
          <Route path="/service-manageService" element={<> <AServiceManage /> </>} />
          <Route path="/addproject" element={<> <AProject /> </>} />
          <Route path="/project-manageProject" element={<> <AProjectManage /> </>} />
          <Route path="/acontact" element={<> <AContact /> </>} />
          <Route path="/alogin" element={<> <Alogin /> </>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
