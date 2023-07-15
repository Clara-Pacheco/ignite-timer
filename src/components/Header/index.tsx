import { HeaderContainer } from './styles'

import IgniteLogo from '../../assets/Logo.svg'

import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer className="header">
      <nav>
        <span>
          <img src={IgniteLogo} alt="" />
        </span>

        <div>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>

          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
