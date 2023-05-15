import React from "react";
import Head from "../../../layout/head/Head";
import { Card,Badge, Row, Col, Modal, ModalBody  } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
  Button,
} from "../../../components/Component";
import { useState } from "react";

const UserProfileSettingPage = ({ sm, updateSm }) => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState();
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    let submitData = {
      ...formData,
    };
    console.log(formData)
    setModal(false);
  };
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>

      <BlockHead size="lg">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h4">Security Settings</BlockTitle>
            <BlockDes>
              <p>These settings will help you to keep your account secure.</p>
            </BlockDes>
          </BlockHeadContent>
          <BlockHeadContent className="align-self-start d-lg-none">
            <Button
              className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`}
              onClick={() => updateSm(!sm)}
            >
              <Icon name="menu-alt-r"></Icon>
            </Button>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <Block>
        <Card className="card-bordered">
          <div className="card-inner-group">
            <div className="card-inner">
              <div className="between-center flex-wrap flex-md-nowrap g-3">
                <div className="nk-block-text">
                  <h6>Save my Activity Logs</h6>
                  <p>You can save your all activity logs including unusual activity detected.</p>
                </div>
                <div className="nk-block-actions">
                  <ul className="align-center gx-3">
                    <li className="order-md-last">
                      <div className="custom-control custom-switch me-n2">
                        <InputSwitch checked id="activity-log" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-inner">
              <div className="between-center flex-wrap g-3">
                <div className="nk-block-text">
                  <h6>Change Password</h6>
                  <p>Set a unique password to protect your account.</p>
                </div>
                <div className="nk-block-actions flex-shrink-sm-0">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                    <li className="order-md-last">
                      <Button onClick={()=>setModal(true)} color="primary">Change Password</Button>
                    </li>
                    <li>
                      <em className="text-soft text-date fs-12px">
                        Last changed: <span>May 2, 2023</span>
                      </em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="between-center flex-wrap flex-md-nowrap g-3">
                <div className="nk-block-text">
                  <h6>
                    2 Factor Auth &nbsp; <Badge className="ms-0" color="success">Enabled</Badge>
                  </h6>
                  <p>
                    Secure your account with 2FA security. When it is activated you will need to enter not only your
                    password, but also a special code using app. You will receive this code via mobile application.{" "}
                  </p>
                </div>
                <div className="nk-block-actions">
                  <Button color="primary">Disable</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Block>
      <Modal isOpen={modal} className="modal-dialog-centered" size="lg" toggle={() => setModal(false)}>
        <ModalBody>
          <a
            href="#dropdownitem"
            onClick={(ev) => {
              ev.preventDefault();
              setModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">Update Password</h5>
            <div className="tab-content">
                <Row className="gy-4">
                  <Col md="12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="full-name">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="currentPassword"
                        onChange={(e) => onInputChange(e)}
                        defaultValue={formData?.currentPassword}
                        placeholder="Enter your current the password.."
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="full-name">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="newpassword"
                        onChange={(e) => onInputChange(e)}
                        defaultValue={formData?.password}
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="full-name">
                        confirm Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="confirmpassword"
                        onChange={(e) => onInputChange(e)}
                        defaultValue={formData?.password}
                        placeholder="Confirm your new password.."
                      />
                    </div>
                  </Col>
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button
                          color="primary"
                          size="lg"
                          onClick={(ev) => {
                            ev.preventDefault();
                            submitForm();
                          }}
                        >
                          Change Password
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setModal(false);
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default UserProfileSettingPage;
