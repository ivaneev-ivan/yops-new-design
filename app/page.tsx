import Home from '@/components/screens/Home';
import { Service } from '@/components/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string;

export const metadata = {
  title: 'Главная страница',
  description: '',
};

const getServices: () => Promise<Service[]> = async () => {
  const response = await fetch(`${BASE_URL}/api/locations/`, { next: { revalidate: 3600 } });
  return (await response.json()) as Service[];
};

export default async function HomePage() {
  const services = await getServices();
  return <Home services={services} />;
}
