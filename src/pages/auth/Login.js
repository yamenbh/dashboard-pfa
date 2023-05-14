import React, { useState } from "react";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";

import { Form,  Spinner, Alert } from "reactstrap";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

 

  const onFormSubmit = (formData) => {
    setLoading(true);
    const email = formData.email;
    const password = formData.password;
    if (formData.name === email && formData.passcode === password) {
      axios.post("/login", { name: formData.name, passcode: formData.passcode })
        .then((response) => {
          localStorage.setItem("accessToken", response.data.token);
          setTimeout(() => {
            window.history.pushState(
              `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
              "auth-login",
              `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
            );
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setTimeout(() => {
            setError("Cannot login with credentials");
            setLoading(false);
          }, 2000);
        });
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 2000);
    }
  };
  

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Login" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Sign-In</BlockTitle>
                <BlockDes>
                  <p>Access NextClass using your email and passcode.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> Unable to login with credentials{" "}
                </Alert>
              </div>
            )}
            <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01"> Email </label>
                </div>
                <div className="form-control-wrap">
                  <input type="text" id="default-01" name="name" ref={register({ required: "This field is required" })} defaultValue="info@softnio.com" placeholder="Enter your email address" className="form-control-lg form-control"/>
                  {errors.name && <span className="invalid">{errors.name.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password"> Password </label>
                </div>
                <div className="form-control-wrap">
                  <a href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input type={passState ? "text" : "password"} id="password" name="passcode" defaultValue="123456" ref={register({ required: "This field is required" })} placeholder="Enter your passcode" className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <Button size="lg" className="btn-block" type="submit" color="primary">
                  {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
                </Button>
              </div>
            </Form>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Login;

//* <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
 //*<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
