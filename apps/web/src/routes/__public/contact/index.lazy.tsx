import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__public/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to contact page</div>;
}
