import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView />} />
          {/* <Route exact path='/signup' component={SignupView} />
      <Route exact path='/otp/create' component={OtpCreateView} />
      <Route exact path='/otp/check' component={OtpCheckView} />
      <Route exact path='/password/send' component={PasswordSendView} />
      <Route
        exact
        path='/password/change/:token'
        component={PasswordUpdateView}
      /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
