import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContextProvider } from "../pages/pre-built/user-manage/UserContext";
import { RedirectAs404 } from "../utils/Utils";

import Homepage from "../pages/Homepage";


import UserListCompact from "../pages/pre-built/user-manage/UserListCompact";

import InvoiceList from "../pages/pre-built/invoice/InvoiceList";
import InvoiceDetails from "../pages/pre-built/invoice/InvoiceDetails";

import Calender from "../pages/app/calender/Calender";

import UserListRegularPage from "../pages/pre-built/user-manage/UserListRegular";
import UserContactCardPage from "../pages/pre-built/user-manage/UserContactCard";
import UserDetailsPage from "../pages/pre-built/user-manage/UserDetailsRegular";
import UserProfileLayout from "../pages/pre-built/user-manage/UserProfileLayout";

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Panel */}

        {/*Pre-built Pages*/}
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-regular`}
          render={() => (
            <UserContextProvider>
              <UserListRegularPage />
            </UserContextProvider>
          )}
        ></Route>
       
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-compact`}
          render={() => (
            <UserContextProvider>
              <UserListCompact />
            </UserContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-details-regular/:id`}
          render={(props) => (
            <UserContextProvider>
              <UserDetailsPage {...props} />
            </UserContextProvider>
          )}
        ></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-regular/`} component={UserProfileLayout}></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-profile-notification/`}
          component={UserProfileLayout}
        ></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-activity/`} component={UserProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-setting/`} component={UserProfileLayout}></Route>
        <Route //Context api added
          exact
          path={`${process.env.PUBLIC_URL}/user-contact-card`}
          render={() => (
            <UserContextProvider>
              <UserContactCardPage />
            </UserContextProvider>
          )}
        ></Route>
        

        <Route exact path={`${process.env.PUBLIC_URL}/invoice-list`} component={InvoiceList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/invoice-details/:id`} component={InvoiceDetails}></Route>

        {/*Application*/}
       
        <Route exact path={`${process.env.PUBLIC_URL}/app-calender`} component={Calender}></Route>


        {/*Components*/}
       
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
