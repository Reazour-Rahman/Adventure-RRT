import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Authentication/Login/Login';
import AddNewService from './pages/Home/AddNewService/AddNewService';
import Main from './pages/Home/Main/Main';
import ManageAllOrder from './pages/Home/ManageAllOrder/ManageAllOrder';
import Details from './pages/Home/Offers/Offer/Details/Details';
import Offers from './pages/Home/Offers/Offers';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

const App = () => {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>

          <Route exact path="/">
            <Main></Main>
          </Route>

          <Route path="/home">
            <Main></Main>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/addNewService">
            <AddNewService></AddNewService>
          </PrivateRoute>

          <Route path="/offers">
            <Offers></Offers>
          </Route>

          <PrivateRoute path="/manageAllOrder">
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>

          <PrivateRoute path="/offer/:detailID">
            <Details></Details>
          </PrivateRoute>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;