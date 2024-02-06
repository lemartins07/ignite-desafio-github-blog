import { Avatar, ProfileContainer, ProfileData } from './styles'
import { FaBuilding, FaGithub } from 'react-icons/fa'
import { Link } from '../Link'
import { FaUserGroup } from 'react-icons/fa6'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)
  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt={user.name} />
      <ProfileData>
        <div>
          <strong>{user.name}</strong>
          <Link type="external" icon="external" url={user.html_url}>
            Github
          </Link>
        </div>
        <p>{user.bio}</p>
        <ul>
          <li>
            <FaGithub /> {user.login}
          </li>
          {user.company && (
            <li>
              <FaBuilding /> {user.company}
            </li>
          )}
          {user.followers && (
            <li>
              <FaUserGroup />
              {user.followers} seguidores
            </li>
          )}
        </ul>
      </ProfileData>
    </ProfileContainer>
  )
}
