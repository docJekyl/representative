import { Card as MCard, Container, Divider, Stack, Text, useMantineTheme } from '@mantine/core'
import React from 'react'

export default ({ title, children, ...rest}) => {
  
  return (
    <Container 
      size='xl'
    >
      <MCard
        size='xl'
        withBorder
        shadow='md'
        radius='lg'
        {...rest}
      >
        {title && (
          <Stack  spacing='xs' pb={20}>
            <Text size='xl' weight={600} pl={20}>{title}</Text>
            <Divider/>
          </Stack>
          )
        }
        {children}
      </MCard>
    </Container>
  )
}
