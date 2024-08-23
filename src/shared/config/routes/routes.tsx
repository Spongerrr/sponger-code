import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from './paths'
import { HomePage } from '@/pages/HomePage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  }
}