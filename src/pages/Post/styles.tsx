import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 1rem;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  & > p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-weight: bold;
    }

    a {
      color: ${(props) => props.theme.blue};
    }
  }
`
