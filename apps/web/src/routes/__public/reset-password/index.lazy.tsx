import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/reset-password/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to reset-password page</div>;
}
