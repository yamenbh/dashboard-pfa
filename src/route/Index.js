import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ProfesseurContextProvider } from "../pages/professeur-manage/ProfesseurContext";
import { StudentContextProvider } from "../pages/student-manage/StudentContext";
import { SurveillantContextProvider } from "../pages/surveillant-manage/SurveillantContext";
import { UserContextProvider } from "../pages/user-manage/UserContext";

import { RedirectAs404 } from "../utils/Utils";

import Homepage from "../pages/Homepage";

import ProfesseurListCompact from "../pages/professeur-manage/ProfesseurListCompact";
import StudentListCompact from "../pages/student-manage/StudentListCompact";
import SurveillantListCompact from "../pages/surveillant-manage/SurveillantListCompact";
import UserListCompact from "../pages/user-manage/UserListCompact"; 
import ConvocationList from "../pages/convocation/ConvocationList";

import ConvocationDetails from "../pages/convocation/ConvocationDetails";

import Calender from "../pages/app/calender/Calender";

import ProfesseurProfileLayout from "../pages/professeur-manage/ProfesseurProfileLayout";
import StudentProfileLayout from "../pages/student-manage/StudentProfileLayout";
import SurveillantProfileLayout from "../pages/surveillant-manage/SurveillantProfileLayout";
import UserProfileLayout from "../pages/user-manage/UserProfileLayout";

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
          path={`${process.env.PUBLIC_URL}/professeur-list-compact`}
          render={() => (
            <ProfesseurContextProvider>
              <ProfesseurListCompact />
            </ProfesseurContextProvider>
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

        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-compact`}
          render={() => (
            <UserContextProvider>
              <UserListCompact />
            </UserContextProvider>
          )}
        ></Route>
        
        <Route exact path={`${process.env.PUBLIC_URL}/professeur-profile-regular/`} component={ProfesseurProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/professeur-profile-setting/`} component={ProfesseurProfileLayout}></Route>
        
        
        <Route exact path={`${process.env.PUBLIC_URL}/student-profile-regular/`} component={StudentProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/student-profile-setting/`} component={StudentProfileLayout}></Route>
        

        <Route exact path={`${process.env.PUBLIC_URL}/surveillant-profile-regular/`} component={SurveillantProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/surveillant-profile-setting/`} component={SurveillantProfileLayout}></Route>
        
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-regular/`} component={UserProfileLayout}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-setting/`} component={UserProfileLayout}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/convocation-list`} component={ConvocationList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/convocation-details/:id`} component={ConvocationDetails}></Route>

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
