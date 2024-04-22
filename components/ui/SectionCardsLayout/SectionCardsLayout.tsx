import React, { FC, ReactNode } from 'react'
import { Container, SimpleGrid, Text, Title } from '@mantine/core'
import classes from '@/components/ui/Features/Features.module.scss'

interface ISectionCardsLayout {
  title: ReactNode
  children: ReactNode
  description?: string
}

const SectionCardsLayout: FC<ISectionCardsLayout> = ({
  title,
  children,
  description,
}) => {
  return (
    <Container size='lg' py='xl'>
      <Title order={2} className={classes.title} ta='center' mt='sm'>
        {title}
      </Title>
      {description && (
        <Text ta='center' className={classes.description} mt='sm'>
          {description}
        </Text>
      )}
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing='xl' mt={50}>
        {children}
      </SimpleGrid>
    </Container>
  )
}

export default SectionCardsLayout
