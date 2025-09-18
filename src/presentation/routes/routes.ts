import { ComponentType, LazyExoticComponent, lazy } from 'react';
import MainLayout from '../layouts/MainLayout';

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  layout: ComponentType<{ children: React.ReactNode }>;
}

// Lazy load pages
const HomePage = lazy(() => import('../pages/Home'));
const UnknownPage = lazy(() => import('../pages/Other/UnknownPage'));

const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    element: HomePage,
    layout: MainLayout,
  },
  {
    path: "*",
    element: UnknownPage,
    layout: MainLayout,
  },
];

export { publicRoutes };