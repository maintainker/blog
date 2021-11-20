import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Background from "./components/background";
import { HomeView } from "./pages";
import PostView from "./pages/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <Background />}>
              <>
                <Outlet />
              </>
            }
          >
            <Route index element={<HomeView />} />
            <Route path=":id" element={<PostView />} />
          </Route>
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
