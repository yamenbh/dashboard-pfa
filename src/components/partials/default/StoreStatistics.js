import React from "react";
import { Card } from "reactstrap";
import { Icon } from "../../Component";

const StoreStatistics = () => {
  return (
    <Card className="h-100">
      <div className="card-inner">
        <div className="card-title-group mb-2">
          <div className="card-title">
            <h6 className="title">Exam Statistics</h6>
          </div>
        </div>
        <ul className="nk-store-statistics">
          <li className="item">
            <div className="info">
              <div className="title">Professeurs</div>
              <div className="count">1,795</div>
            </div>
            <Icon name="users" className="bg-primary-dim"></Icon>
          </li>
          <li className="item">
            <div className="info">
              <div className="title">Etudiants</div>
              <div className="count">2,327</div>
            </div>
            <Icon name="users" className="bg-info-dim"></Icon>
          </li>
          <li className="item">
            <div className="info">
              <div className="title">Responsables</div>
              <div className="count">674</div>
            </div>
            <Icon name="users" className="bg-pink-dim"></Icon>
          </li>
          <li className="item">
            <div className="info">
              <div className="title">Users</div>
              <div className="count">68</div>
            </div>
            <Icon name="users" className="bg-purple-dim"></Icon>
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default StoreStatistics;
