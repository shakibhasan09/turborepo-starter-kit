import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to landing page</div>;
}
