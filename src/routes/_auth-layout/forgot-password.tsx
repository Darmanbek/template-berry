import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth-layout/forgot-password")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth-layout/forgot-password"!</div>
}
