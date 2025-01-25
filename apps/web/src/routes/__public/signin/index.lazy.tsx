import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/signin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to signin page</div>;
}
