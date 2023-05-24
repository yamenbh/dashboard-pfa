import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContextProvider } from "../pages/pre-built/user-manage/UserContext";
import { StudentContextProvider } from "../pages/pre-built/student-manage/StudentContext";
import { SurveillantContextProvider } from "../pages/pre-built/surveillant-manage/SurveillantContext";
import { RedirectAs404 } from "../utils/Utils";

import Homepage from "../pages/Homepage";

import UserListCompact from "../pages/pre-built/user-manage/UserListCompact";
import StudentListCompact from "../pages/pre-built/student-manage/StudentListCompact";
import SurveillantListCompact from "../pages/pre-built/surveillant-manage/SurveillantListCompact";
import InvoiceList from "../pages/pre-built/invoice/InvoiceList";
import InvoiceDetails from "../pages/pre-built/invoice/InvoiceDetails";

import Calender from "../pages/app/calender/Calender";

import UserProfileLayout from "../pages/pre-built/user-manage/UserProfileLayout";
import StudentProfileLayout from "../pages/pre-built/student-manage/StudentProfileLayout";
import SurveillantProfileLayout from "../pages/pre-built/surveillant-manage/SurveillantProfileLayout";

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Panel */}

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
          path={`${process.env.PUBLIC_URL}/student-list-compact`}
          render={() => (
            <StudentContextProvider>
              <StudentListCompact />
            </StudentContextProvider>
          )}
        ></Route>

        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/surveillant-list-compact`}
          render={() => (
            <SurveillantContextProvider>
              <SurveillantListCompact />
            </SurveillantContextProvider>
          )}
        ></Route>
        
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-regular/`} component={UserProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-setting/`} component={UserProfileLayout}></Route>
        
        
        <Route exact path={`${process.env.PUBLIC_URL}/student-profile-regular/`} component={StudentProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/student-profile-setting/`} component={StudentProfileLayout}></Route>
        

        <Route exact path={`${process.env.PUBLIC_URL}/surveillant-profile-regular/`} component={SurveillantProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/surveillant-profile-setting/`} component={SurveillantProfileLayout}></Route>
        
        
        

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
