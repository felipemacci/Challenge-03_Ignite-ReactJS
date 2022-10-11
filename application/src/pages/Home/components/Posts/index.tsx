import { Post } from "./components/Post";
import { PostList, PostsContainer } from "./styles";

export function Posts() {
  return (
    <PostsContainer>
      <header>
        <h2>Posts</h2>
        <span>6 posts</span>
        <input type="text" placeholder="Search content" />
      </header>

      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>
    </PostsContainer>
  )
}