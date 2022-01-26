import { useRouter } from 'next/router';

export default function useCurrentRoute() {
  const router = useRouter();
  const currentRoute = router.route;
  return currentRoute;
}
