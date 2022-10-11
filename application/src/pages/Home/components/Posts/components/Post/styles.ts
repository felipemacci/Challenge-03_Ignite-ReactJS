import styled from "styled-components";

export const PostContainer = styled.article`
  padding: 2rem;
  background: ${props => props.theme["base-post"]};
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      width: 15rem;
      line-height: 1.6;
      font-size: 1.25rem;
    }

    span {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  p {
    margin-top: 1rem;
    line-height: 1.6;
  }
`