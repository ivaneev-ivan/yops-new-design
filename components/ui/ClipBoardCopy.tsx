import { Button, rem, Tooltip } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { FC } from 'react'

const ButtonCopy: FC<{ data: string }> = ({ data }) => {
  const clipboard = useClipboard()
  return (
    <Tooltip
      label='Код доступа скопирован'
      position='bottom'
      radius='sm'
      transitionProps={{ duration: 100, transition: 'slide-down' }}
      opened={clipboard.copied}
    >
      <Button
        variant='light'
        radius='xl'
        size='sm'
        styles={{
          root: {
            marginLeft: rem(10),
          },
        }}
        onClick={() => clipboard.copy(data)}
      >
        {clipboard.copied ? (
          <IconCheck style={{ width: rem(20), height: rem(48) }} stroke={1.5} />
        ) : (
          <IconCopy style={{ width: rem(20), height: rem(48) }} stroke={1.5} />
        )}
      </Button>
    </Tooltip>
  )
}

export default ButtonCopy
