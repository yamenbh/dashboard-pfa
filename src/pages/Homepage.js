import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import DataCard from "../components/partials/default/DataCard";

import OrderStatistics from "../components/partials/default/OrderStatistics";
import StoreStatistics from "../components/partials/default/StoreStatistics";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Row,
  Col,
  BlockBetween,
} from "../components/Component";
import {

  DefaultOrderChart,
 
} from "../components/partials/charts/default/DefaultCharts";

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
                up={true}
                chart={<DefaultOrderChart />}
                
              />
            </Col>
            
            <Col xxl="3" sm="6">
              <DataCard
                title="Etudiants"
                amount={"2293"}
                chart={<DefaultOrderChart />}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Professeurs"
                amount={"847"}
                chart={<DefaultOrderChart />}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Responsables"
                amount={"23485"}
                chart={<DefaultOrderChart />}
              />
            </Col>
            <Col xxl="3" md="6">
              <OrderStatistics />
            </Col>
            <Col xxl="3" md="6">
              <StoreStatistics />
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
