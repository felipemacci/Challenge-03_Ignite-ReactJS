import { AboutItem, AboutList, ProfileContainer, ProfileInfo } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/felipemacci.png" alt="" />

      <ProfileInfo>
        <header>
          <h1>Felipe Macci</h1>
          <a href="https://github.com/felipemacci" target="_blank">
            <span>Github</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis voluptatibus inventore id? Atque, culpa. Quaerat sint mollitia optio, temporibus a alias. Dolores modi vel ullam obcaecati. Porro repudiandae facere corrupti.</p>

        <AboutList>
          <AboutItem>
            <i className="fa-brands fa-github"></i>
            <span>felipemacci</span>
          </AboutItem>

          <AboutItem>
            <i className="fa-solid fa-building"></i>
            <span>Rocketseat</span>
          </AboutItem>

          <AboutItem>
            <i className="fa-solid fa-user-group"></i>
            <span>32 followers</span>
          </AboutItem>
        </AboutList>
      </ProfileInfo>
    </ProfileContainer>
  )
}