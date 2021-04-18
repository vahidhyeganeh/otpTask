import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import {store} from './store/LoginReducers';
import {Provider} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

//pages
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import GetOTP from "./pages/GetOTP";


function App() {

    return (
        <Provider store={store}>
            <div className={'App'}>
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/GetOTP' component={GetOTP}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </Router>
                <ToastContainer />
            </div>
        </Provider>
    );
}


export default App;
