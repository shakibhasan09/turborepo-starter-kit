import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__authenticated/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to dashboard</div>;
}
