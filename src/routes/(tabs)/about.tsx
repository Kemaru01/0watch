import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(tabs)/about')({
  component: AboutPage,
})

function AboutPage() {
  return <div>Hello i'm Kemal</div>
}
