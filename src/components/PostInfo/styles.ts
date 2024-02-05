import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -6rem;
  box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    a {
      font-size: ${(props) => props.theme['font-sm']};
    }
  }

  & > h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) => props.theme['font-xl']};
    margin-bottom: 0.5rem;
  }

  & > ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
