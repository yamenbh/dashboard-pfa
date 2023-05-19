import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

import {
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  BlockDes,
  BlockHeadContent,
  Block,
  BlockBetween,
} from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/whatsapp.jpg";
//import { invoiceData } from "./Invoice";
import { Link } from "react-router-dom";

const InvoiceDetails = ({ match }) => {
  //const [data] = useState(invoiceData);
  // const [user, setUser] = useState();

  const [currentUser, setCurentUser] = useState()

  useEffect(()=>{
    const user = localStorage.getItem("currentUser")
    setCurentUser(JSON.parse(user))
  }, [])

  return (
    <React.Fragment>
      <Head title="Invitation Detail"></Head>
      {currentUser && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                  Convocation <strong className="text-primary small">#{currentUser?.orderId}</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Created At: <span className="text-base">{currentUser?.date}</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/invoice-list`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/invoice-list`}>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <div className="invoice">
              <div className="invoice-action">
                <Link to={`${process.env.PUBLIC_URL}/invoice-print/${currentUser?.id}`} target="_blank">
                  <Button size="lg" color="primary" outline className="btn-icon btn-white btn-dim">
                    <Icon name="printer-fill"></Icon>
                  </Button>
                </Link>
              </div>
              <div className="invoice-wrap">
                <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Convocation To</span>
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
                    <h3 className="title">Convocation</h3>
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <QRCode value= {currentUser?.orderId}/>
                        <span>Student ID</span>:<span>#{currentUser?.orderId}</span>
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
                      Convocation was created on a computer and is valid without the signature .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </Content>
      )}
    </React.Fragment>
  );
};
export default InvoiceDetails;
