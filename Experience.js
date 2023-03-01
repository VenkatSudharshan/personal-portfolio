import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors of Technology
          </h3>
          <p> VIT University</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Analyst Intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Infologic Solutions
          </h4>

          <p> Vijayawada</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Acculytixs
          </h4>
          <p>Vijayawada</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters in Information Systems
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Maryland, Baltimore County
          </h4>
          <p>
            Baltimore, Maryland.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
