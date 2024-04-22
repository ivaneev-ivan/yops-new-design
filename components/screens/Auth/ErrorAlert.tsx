import React, { FC } from 'react'
import { Card, Text } from '@mantine/core'
import classes from '@/components/screens/Auth/Login.module.scss'

const ErrorAlert: FC<{ title: string; errors: string[] }> = ({
  errors,
  title,
}) => (
  <Card mb={20} shadow='xl' radius='md'>
    {title !== 'non_field_errors' && (
      <Text fz='xl' fw={700} className={classes.cardTitle} mt='md'>
        {title.toUpperCase()}
      </Text>
    )}
    {errors.map((el: string) => (
      <Text key={el}>{el}</Text>
    ))}
  </Card>
)

export default ErrorAlert
