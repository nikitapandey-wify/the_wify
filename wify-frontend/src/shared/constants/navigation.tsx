"use client";

import { Home } from "lucide-react";

export const APP_ROUTES = {
  ROOT: "/",
  NOT_FOUND: "/404",
};
export const PROTECTED_ROUTES = [APP_ROUTES.ROOT];

export const PUBLIC_ROUTES = [APP_ROUTES.NOT_FOUND];

export enum APP_MENU_ITEMS {
  HOME = "Home",
}

export const MENU_ITEMS: Record<
  APP_MENU_ITEMS,
  { name: string; icon: React.ReactNode }
> = {
  [APP_MENU_ITEMS.HOME]: {
    name: "Home",
    icon: <Home size={22} />,
  },
};

export const getFilledAppRoute = (
  route: string,
  params: Record<string, string>
) => {
  if (!Object.values(APP_ROUTES)?.includes(route)) return route;

  return Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replace(`:${key}`, value);
  }, route);
};