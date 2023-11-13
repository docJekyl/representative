import { Avatar, Group, Header } from '@mantine/core'
import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'

export default () => {
  return (
    <Header
      height={70}

    >
      <Group position='apart' mt={8} px={10}>
        <AiOutlineCode size={50} />
        <Avatar size={50}/>
      </Group>
    </Header>
  )
}
