import { Button, Container, Group, Text } from '@mantine/core';
import classes from './HeroTitle.module.scss';
import YopsVpn from '@/components/ui/YopsVpn';

const HeroTitle = () => (
  <div className={classes.wrapper}>
    <Container size={700} className={classes.inner}>
      <h1 className={classes.title}>
        <YopsVpn /> Собственные VPN-сервера или уже готовые
      </h1>
      <Text className={classes.description} color="dimmed">
        Здесь Вы можете создать свой собственный VPN-сервер или купить готовую конфигурацию для
        быстрого доступа. Мы стремимся обеспечить максимальную защиту и конфиденциальность,
        постоянно совершенствуя наши технологии. С Yops Ваша цифровая жизнь будет в безопасности!
      </Text>

      <Group className={classes.controls}>
        <a href="#price">
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Купить сервер
          </Button>
        </a>
      </Group>
    </Container>
  </div>
);

export default HeroTitle;
