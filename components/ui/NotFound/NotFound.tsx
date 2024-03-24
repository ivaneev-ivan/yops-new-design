import { Container, Title, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';
import { Illustration } from './Illustration';
import classes from './NotFound.module.scss';

const NotFound = () => (
  <Container className={classes.root}>
    <div className={classes.inner}>
      <Illustration className={classes.image} />
      <div className={classes.content}>
        <Title className={classes.title}>Ничего не найдено</Title>
        <Text c="dimmed" size="lg" ta="center" className={classes.description}>
          Страница, которую вы пытаетесь открыть, не существует. Возможно, вы ошиблись в адресе или
          страница была перемещена на другой URL. Если вы считаете, что это ошибка, обратитесь в
          службу поддержки.
        </Text>
        <Group justify="center">
          <Link href="/">
            <Button size="md">Перейти на Главную страницу</Button>
          </Link>
        </Group>
      </div>
    </div>
  </Container>
);

export default NotFound;
