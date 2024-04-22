import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  rem,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import classes from '@/components/screens/PasswordReset/PasswordReset.module.scss'

const PasswordReset = () => (
  <Paper className={classes.form}>
    <Container size={460} my={30}>
      <Title className={classes.title} ta='center'>
        Потеряли пароль?
      </Title>
      <Text c='dimmed' fz='sm' ta='center'>
        Введите email, чтобы получить ссылку для сброса пароля
      </Text>

      <Paper withBorder shadow='md' p={30} radius='md' mt='xl'>
        <TextInput label='Ваш email' placeholder='me@mantine.dev' required />
        <Group justify='space-between' mt='lg' className={classes.controls}>
          <Anchor
            href='/login/'
            c='dimmed'
            size='sm'
            className={classes.control}
          >
            <Center inline>
              <IconArrowLeft
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
              <Box ml={5}>Вернуться на страницу авторизации</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Сбросить пароль</Button>
        </Group>
      </Paper>
    </Container>
  </Paper>
)
export default PasswordReset
