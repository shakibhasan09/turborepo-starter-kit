import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { RouterContextProps } from "@web/types/router-context";

export const Route = createRootRouteWithContext<RouterContextProps>()({
  component: Outlet,
});
