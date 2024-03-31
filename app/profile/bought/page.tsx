import { Navbar } from '@/components/ui/Navbar/Navbar';

export const metadata = {
  title: 'Личный кабинет | Новый заказ',
};

const Page = () => (
  <Navbar current="/profile/bought/">
    <div>Hello world</div>
  </Navbar>
);

export default Page;