import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 32px;
  padding-left: 40px;
`
export const Avatar = styled.img`
  max-width: 148px;
  max-height: 148px;
  width: 100%;
  border-radius: 6px;
`

export const ProfileData = styled.div`
  & div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    strong {
      font-size: ${(props) => props.theme['font-xl']};
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      font-size: ${(props) => props.theme['font-sm']};
    }
  }

  & p {
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
