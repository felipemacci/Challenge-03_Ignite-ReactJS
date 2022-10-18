import { IssueContent } from "./components/IssueContent";
import { IssueInfo } from "./components/IssueInfo";
import { IssueContainer } from "./styles";

export function Issue() {
  return (
    <IssueContainer className="container">
      <IssueInfo />
      <IssueContent />
    </IssueContainer>
  )
}