import React from "react";
import { Line } from "react-chartjs-2";
import {
  Wave,
  FilterIcon,
  DateSeperator,
  ProjectIcon,
  ShellImage,
  QuickActions,
  SurveyIcon,
  GraphIcon,
  ContractorIcon,
  CreateProjectIcon,
  InviteCollaboratorIcon,
  CreateSurveyIcon,
  PageVisits
} from "assets/icons(svg)";
import "./style.scss";

const Overview = () => {
  const state = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  return (
    <div className="overview">
      <div className="flex flex-col sm:flex-row justify-between mb-5 mt-4">
        <div className="flex">
          <img src={Wave} className="" />
          <p className="pl-3 pt-2 mda-welcome">Welcome</p>
        </div>
        <div className="flex mt-2 sm:mt-0">
          <div className="date">
            <img className="mr-3" src={FilterIcon} />
            <p className="date-text">28 June 2021</p>
          </div>
          <img src={DateSeperator} className="mx-5" />
          <div className="date">
            <img className="mr-3" src={FilterIcon} />
            <p className="date-text">28 June 2021</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <div className="card-record p-4">
          <div className="flex justify-between">
            <div className="flex text-image">
              <img src={ProjectIcon} className="mr-2 h-5 mt-1" />
              <p className="cr-projects mt-2">Projects</p>
            </div>
            <div className="project-numb">
              <p className="num-big">300</p>
              <p className="num-text">No. of projects allocated</p>
            </div>
          </div>
          <hr className="cr-divide mt-3" />
          <div className="flex justify-between mt-4">
            <div className="">
              <p className="num-big-2">232</p>
              <p className="text-ongoing mt-2">Ongoing</p>
            </div>
            <div className="">
              <p className="num-big-2">90</p>
              <p className="text-completed mt-2">Completed</p>
            </div>
            <div className="">
              <p className="num-big-gray">0</p>
              <p className="text-abandoned mt-2">Abandoned</p>
            </div>
          </div>
        </div>
        <div className="card-record p-4">
          <div className="">
            <div className="flex text-image">
              <img src={SurveyIcon} className="mr-2 h-5 mt-2" />
              <p className="cr-projects mt-3">Surveys</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="">
              <p className="num-big-3 font-bold">1105</p>
              <p className="text-survey mt-8">No. of surveys created</p>
            </div>
          </div>
        </div>
        <div className="card-record p-4">
          <div className="">
            <div className="flex text-image">
              <img src={ContractorIcon} className="mr-2 h-5 mt-2" />
              <p className="cr-projects mt-3">Contractor</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="">
              <p className="num-big-3 font-bold">3205</p>
              <p className="text-survey mt-8">No. of contractors on-board</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <div className="card-record-deet p-4">
          <div className="flex justify-between">
            <div className="flex text-image">
              <img src={ContractorIcon} className="mr-2 h-5 mt-2" />
              <p className="cr-projects mt-4">Contractors</p>
            </div>
            <div className="project-numb mt-4">
              <p className="see-all">See All</p>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2">Joined Aug 5, 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2">Joined Aug 5, 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2">Joined Aug 5, 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
              </span>
            </div>
          </div>
        </div>
        <div className="card-record-deet p-4">
          <div className="flex justify-between">
            <div className="flex text-image">
              <img src={ProjectIcon} className="mr-2 h-5 mt-2" />
              <p className="cr-projects mt-3">Projects</p>
            </div>
            <div className="project-numb mt-3">
              <p className="see-all">See All</p>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2"> Jul 2020 - Aug 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2"> Jul 2020 - Aug 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2"> Jul 2020 - Aug 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2"> Jul 2020 - Aug 2021</p>
              </span>
            </div>
          </div>
          <div className="flex text-image mt-5">
            <img src={ShellImage} className="mr-6 h-8 mt-3" />
            <div className="">
              <p className="card-deets-text mt-2">Shell Contractors</p>
              <span className="flex">
                <p className="card-deets-text-status mt-2">Pending</p>
                <p className="card-deets-date mx-3 mt-2"> Jul 2020 - Aug 2021</p>
              </span>
            </div>
          </div>
        </div>
        <div className="card-record-deet-2-cont">
          <div className="card-record-deet-2-top mb-4 p-4">
            <div className="">
              <div className="flex text-image">
                <img src={PageVisits} className="mr-2 h-5 mt-2" />
                <p className="cr-projects mt-3">Page Visits</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="">
                <p className="num-big-3 font-bold">3205</p>
                <p className="text-survey mt-8">No. of contractors on-board</p>
              </div>
            </div>
          </div>
          <div className="card-record-deet-2 p-4">
            <div className="flex text-image">
              <img src={QuickActions} className="mr-2 h-5 mt-2" />
              <p className="cr-projects mt-3">Quick Actions</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="quick-create ">
                <img className="m-auto" src={CreateProjectIcon} />
                <p className="create-text">Create Project</p>
              </div>
              <div className="quick-create ">
                <img className="m-auto" src={CreateSurveyIcon} />
                <p className="create-text">Create Survey</p>
              </div>
              <div className="quick-create">
                <img className="m-auto" src={InviteCollaboratorIcon} />
                <p className="create-text">Invite Collaborator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="big-card p-4">
          <div className="flex text-image">
            <img src={GraphIcon} className="mr-2 h-5 mt-3" />
            <p className="cr-projects-graph mt-4 mb-10">Graphical Respresentation</p>
          </div>
          <Line data={state} height={70} />
        </div>
      </div>
    </div>
  );
};
export default Overview;
