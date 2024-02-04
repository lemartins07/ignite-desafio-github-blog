import { Avatar, ProfileContainer, ProfileData } from './styles'
import { FaBuilding, FaGithub } from 'react-icons/fa'
import avatar from '../../assets/avatar.png'
import { Link } from '../Link'
import { FaUserGroup } from 'react-icons/fa6'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt="teste" />
      <ProfileData>
        <div>
          <strong>Cameron Williamson</strong>
          <Link url="#">Github</Link>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FaGithub /> cameronwll
          </li>
          <li>
            <FaBuilding /> Rocketseat
          </li>
          <li>
            <FaUserGroup />
            32 seguidores
          </li>
        </ul>
      </ProfileData>
    </ProfileContainer>
  )
}
