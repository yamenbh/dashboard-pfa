import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import SurveillantProfileRegularPage from "./SurveillantProfileRegular";
import { Route, Switch, Link } from "react-router-dom";
import { Icon, UserAvatar } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { Card } from "reactstrap";


const SurveillantProfileLayout = ({match}) => {
  //000000000000000000
/*   const { contextData } = useContext(SurveillantContext);
  const [data] = contextData;
  const [noteData, setNoteData] = useState(notes); */

//0000000000000000000000000000

  const [sm, updateSm] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [profileName, setProfileName] = useState("ABIRA Fatiha");
  const [currentSurveillant, setCurentSurveillant] = useState()

  useEffect(()=>{
    const surveillant = localStorage.getItem("currentSurveillant")
    setCurentSurveillant(JSON.parse(surveillant))
  }, [])
  // function to change the design view under 990 px
   // grabs the id of the url and loads the corresponding data
  
  /*  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spSurveillant = data.find((item) => item.id === Number(id));
      setProfileName(spSurveillant);
    } else {
      setProfileName(data[0]);
    }
  }, [match.params.id, data]); */
 
  /////////////////////////////////
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
      updateSm(false);
    });
    return () => {
      window.removeEventListener("resize", viewChange);
      window.removeEventListener("load", viewChange);
    };
  }, []);

  return (
    <React.Fragment>
      
      <Content>
        <Card className="card-bordered">
          <div className="card-aside-wrap">
            <div
              className={`card-aside card-aside-left surveillant-aside toggle-slide toggle-slide-left toggle-break-lg ${
                sm ? "content-active" : ""
              }`}
            >
              <div className="card-inner-group">
                <div className="card-inner">
                  <div className="surveillant-card">
                    <UserAvatar text={findUpper(profileName)} theme="primary" />
                    <div className="surveillant-info">
                      <span className="lead-text">{currentSurveillant?.name}</span>
                      <span className="sub-text">{currentSurveillant?.email}</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="card-inner p-0">
                  <ul className="link-list-menu">
                    <li onClick={() => updateSm(false)}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/surveillant-profile-regular`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/surveillant-profile-regular` ? "active" : ""
                        }
                      >
                        <Icon name="surveillant-fill-c"></Icon>
                        <span>Personal Information</span>
                      </Link>
                    </li>
              
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-inner card-inner-lg">
              {sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/surveillant-profile-regular`}
                  render={() => <SurveillantProfileRegularPage updateSm={updateSm} sm={sm} setProfileName={setProfileName} />}
                ></Route>
                
              </Switch>
            </div>
          </div>
        </Card>
      </Content>

    </React.Fragment>
  );
};

export default SurveillantProfileLayout;
