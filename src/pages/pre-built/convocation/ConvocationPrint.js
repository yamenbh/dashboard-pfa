import React, { useState, useEffect } from "react";
import { Button, Icon, Block } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/whatsapp.jpg";
import { convocationData } from "./Convocation";
import QRCode from "react-qr-code";
const ConvocationPrint = ({ match }) => {
  const [currentUser, setCurentUser] = useState()

  useEffect(()=>{
    const user = localStorage.getItem("currentUser")
    setCurentUser(JSON.parse(user))
  }, [])

  useEffect(() => {
    setTimeout(() => window.print(), 500);
  }, []);

  /* useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);
 */
  return (
    <body className="bg-white">
      <Head title="Convocation Print"></Head>
      {currentUser && (
        <Content>
          <Block>
            <div className="convocation convocation-print">
              <div className="convocation-action">
                <Button
                  size="lg"
                  color="primary"
                  outline
                  className="btn-icon btn-white btn-dim"
                  onClick={() => window.print()}
                >
                  <Icon name="printer-fill"></Icon>
                </Button>
              </div>
              <div className="convocation-wrap">
                <div className="convocation-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="convocation-head">
                  <div className="convocation-contact">
                    <span className="overline-title">Convocation To</span>
                    <div className="convocation-contact-info">
                      <h4 className="title">{currentUser?.name}</h4>
                      <ul className="list-plain">
                        <li>
                          <Icon name="map-pin-fill"></Icon>
                          <span>
                            The Engineering School
                          </span>
                        </li>
                        <li>
                          <Icon name="call-fill"></Icon>
                          <span>{currentUser?.phone}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="convocation-desc">
                    <h3 className="title">Convocation</h3>
                    <ul className="list-plain">
                      <li className="convocation-id">
                        <QRCode value= {currentUser?.orderId}/>
                        <span>Convocation ID</span>:<span>{currentUser?.orderId}</span>
                      </li>
                      <li className="convocation-date">
                        <span>Date</span>:<span>{currentUser?.dateExam.split(",")[0]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="convocation-bills">
                  <div className="table-responsive">
                  <div>
                      <p>
                        Dear <span>{currentUser?.name}</span> , <br/>
                      The exams will be held on <span className="convocation-date" >{currentUser?.dateExam}</span> and will cover the material taught throughout the semester. We ask that you arrive at least 30 minutes before the start of the exam to ensure that you have enough time to find your seat and get settled.

<br/><br/>Please be aware that you will need to bring your student ID and any necessary materials (e.g. pens, pencils, calculators) to the exam. Additionally, electronic devices such as smartphones, laptops, or tablets are not allowed during the exam
                      </p><br/>
                    </div> 
                    <div className="nk-notes ff-italic fs-12px text-soft">
                      Convocation was created on a computer and is valid without the signature and seal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </Content>
      )}
    </body>
  );
};

export default ConvocationPrint;
