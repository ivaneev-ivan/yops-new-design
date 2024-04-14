import OrderDetail from '@/components/screens/Profile/Orders/OrderDetail'
import { Navbar } from '@/components/ui/Navbar/Navbar'

export default function Page({ params }: { params: { id: number } }) {
  return (
    <Navbar current={`/profile/bought/${params.id}>`}>
      <OrderDetail id={params.id} />
    </Navbar>
  )
}
