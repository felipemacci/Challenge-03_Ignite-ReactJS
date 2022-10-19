import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueContent } from "./components/IssueContent";
import { IssueInfo } from "./components/IssueInfo";
import { IssueContainer } from "./styles";

export function Issue() {
  const { issueId } = useParams()
  const [issue, setIssue] = useState<any>({})

  const getFullIssue = async() => {
    try {
      const response = await axios.get(`https://api.github.com/repos/felipemacci/Challenge-03_Ignite-ReactJS/issues/${issueId}`)

      setIssue(await response.data)
    } catch(error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getFullIssue()
  }, [])

  return (
    <IssueContainer className="container">
      <IssueInfo
        url={ issue['html_url'] }
        title={ issue.title }
        author={ issue.user.login }
        date={ issue['created_at'] }
        comments={ issue.comments }
      />
      <IssueContent />
    </IssueContainer>
  )
}