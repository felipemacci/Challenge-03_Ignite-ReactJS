import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { AboutItem, AboutList, ProfileContainer, ProfileInfo } from "./styles";
import { followersFormatter } from '../../../../utils/formatter'

export function Profile() {
  const { userInfo } = useContext(UserContext)

  return (
    <ProfileContainer>
      <img src={ userInfo['avatar_url'] } alt="" />

      <ProfileInfo>
        <header>
          <h1>{ userInfo.name }</h1>
          <a href={ 'https://github.com/' + userInfo.login } target="_blank">
            <span>Github</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>

        <p>{ userInfo.bio }</p>

        <AboutList>
          <AboutItem>
            <i className="fa-brands fa-github"></i>
            <span>{ userInfo.login }</span>
          </AboutItem>

          {
            userInfo.company && (
              <AboutItem>
                <i className="fa-solid fa-building"></i>
                <span>{ userInfo.company }</span>
              </AboutItem>
            )
          }

          <AboutItem>
            <i className="fa-solid fa-user-group"></i>
            <span>{ followersFormatter.format(userInfo.followers).toLowerCase() } followers</span>
          </AboutItem>
        </AboutList>
      </ProfileInfo>
    </ProfileContainer>
  )
}