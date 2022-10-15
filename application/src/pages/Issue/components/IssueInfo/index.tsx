import { NavLink } from "react-router-dom";
import { InfoItem, InfoList, IssueInfoContainer } from "./styles";

export function IssueInfo() {
  return (
    <IssueInfoContainer>
      <header>
        <nav>
          <NavLink to="/">
            <i className="fa-solid fa-chevron-left"></i>
            Back
          </NavLink>

          <a href="">
            View on Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </nav>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <InfoList>
        <InfoItem>
          <i className="fa-brands fa-github"></i>
          <span>Github</span>
        </InfoItem>
        <InfoItem>
          <i className="fa-solid fa-calendar-day"></i>
          <span>1 day ago</span>
        </InfoItem>
        <InfoItem>
          <i className="fa-solid fa-comment"></i>
          <span>5 comments</span>
        </InfoItem>
      </InfoList>
    </IssueInfoContainer>
  )
}