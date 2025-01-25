import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/privacy/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to privacy page</div>;
}
