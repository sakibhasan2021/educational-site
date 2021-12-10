
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import MainBanner from './Component/Mainbanner/MainBanner';
import Notfound from './Component/NotFound/Notfound';
import CourseCard from './Component/CourseCard/CourseCard';
import CourseDetails from './CourseDetails/CourseDetails';
import MoreCourse from './Component/MoreCourse/MoreCourse';
import Welcome from './Component/Welcome/Welcome';

function App() {
  return (
    <div>
       
      <Router>
        <Header/>

           <Switch>

                      <Route  exact path="/">
                        <MainBanner/> 
                        <CourseCard/> 
                        <Footer/>
                      </Route>
                      <Route  path="/mainBanner">
                            <MainBanner/> 
                    
                       </Route>
                  <Route  path="/product">
                   
                    <CourseCard/>  
                  </Route>
                          
                        <Route  path='/subscribe'>
                              <Footer/>      
                        </Route>
                        <Route path='/coursedetails/:id' children={<CourseDetails/>}>
                                   
                        </Route>
                        <Route path="/moreCourses">
                          <MoreCourse/>
                        </Route>
                        <Route path="/welcome">
                            <Welcome/>
                        </Route>
                        <Route  path='*'>
                           
                              <Notfound/> 
                                  
                        </Route>


           </Switch>
            
      </Router>
             
    </div>
  );
}

export default App;
