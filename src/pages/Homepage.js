import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import DataCard from "../components/partials/default/DataCard";

import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Row,
  Col,
  BlockBetween,
} from "../components/Component";

const Homepage = () => {
 
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Dashboard
              </BlockTitle>
            </BlockHeadContent>
            
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col xxl="3" sm="6">
              <DataCard
                title="Professeurs"
                amount={"1975"}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Etudiants"
                amount={"2293"}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Users"
                amount={"847"}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Responsables"
                amount={"23485"}
              />
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
