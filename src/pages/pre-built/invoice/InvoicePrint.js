import React, { useState, useEffect } from "react";
import { Button, Icon, Block } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/SchoolLogo.png";
import { invoiceData } from "./Invoice";
import QRCode from "react-qr-code";
const InvoicePrint = ({ match }) => {
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
      <Head title="Invoice Print"></Head>
      {currentUser && (
        <Content>
          <Block>
            <div className="invoice invoice-print">
              <div className="invoice-action">
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
              <div className="invoice-wrap">
                <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Invitation To</span>
                    <div className="invoice-contact-info">
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
                  <div className="invoice-desc">
                    <h3 className="title">Invitation</h3>
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <QRCode value= {currentUser?.orderId}/>
                        <span>Invitation ID</span>:<span>{currentUser?.orderId}</span>
                      </li>
                      <li className="invoice-date">
                        <span>Date</span>:<span>{currentUser?.dateExam.split(",")[0]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="invoice-bills">
                  <div className="table-responsive">
                  <div>
                      <p>
                        Dear <span>{currentUser?.name}</span> , <br/>
                      The exams will be held on <span className="invoice-date" >{currentUser?.dateExam}</span> and will cover the material taught throughout the semester. We ask that you arrive at least 30 minutes before the start of the exam to ensure that you have enough time to find your seat and get settled.

<br/><br/>Please be aware that you will need to bring your student ID and any necessary materials (e.g. pens, pencils, calculators) to the exam. Additionally, electronic devices such as smartphones, laptops, or tablets are not allowed during the exam
                      </p><br/>
                    </div> 
                    <div className="nk-notes ff-italic fs-12px text-soft">
                      Invoice was created on a computer and is valid without the signature and seal.
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

export default InvoicePrint;
