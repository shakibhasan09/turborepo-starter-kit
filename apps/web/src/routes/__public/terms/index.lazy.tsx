import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/terms/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to terms and conditions page</div>;
}
