import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/signup/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to signup page</div>;
}
