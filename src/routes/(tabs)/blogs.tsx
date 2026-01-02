import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(tabs)/blogs')({
  component: Blogs,
})

function Blogs() {
  return <div>
    <ul>
      <li>
        Its my second blog!!
      </li>
      <li>
        My first blog
      </li>
    </ul>
  </div>
}
