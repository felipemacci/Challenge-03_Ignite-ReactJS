import { PostContainer } from "./styles";
import { formatDistanceToNowStrict } from 'date-fns'

interface PostProps {
  title: string
  date: Date
  content: string
}

export function Post({ title, date, content }: PostProps) {
  const summary = content.split(' ').slice(0, 23).join(' ') + '...'
  const howMuchTime = formatDistanceToNowStrict(date, {
    addSuffix: true,
  })

  return (
    <PostContainer>
      <header>
        <h3>{title}</h3>
        <span>{howMuchTime}</span>
      </header>

      <p>{summary}</p>
    </PostContainer>
  )
}