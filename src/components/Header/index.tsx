import { CoverContainer, HeaderContainer } from "./styles";
import l_effect from '../../assets/l_effect.svg'
import r_effect from '../../assets/r_effect.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={ logo } alt="" />

      <CoverContainer>
        <img src={ l_effect } alt="" />
        <img src={ r_effect } alt="" />
      </CoverContainer>
    </HeaderContainer>
  )
}