import React from 'react'
import HeroContent from './HeroContent'
import { Center, Grid, Space, Text } from '@mantine/core'
import { BsFacebook } from 'react-icons/bs'


export default () => {

  const navlink = () => window.open('https://www.facebook.com/profile.php?id=100092381591137')

  return (
    <div>
      <HeroContent />

      <div>
        <Center>
          <Text>Don't mind the mess. We are currently building a website.</Text>
        </Center>
      </div>
      <Space h={15} />
      <div>
        <Center>
          <Text>In the mean time, you can find us on Facebook. </Text>
        </Center>
      </div>
      <Space h={15} />
      <div>
        <Center>
          <BsFacebook  size={30} onClick={() => navlink()}/>
        </Center>
      </div>

      {/* <Grid>
        <Grid.Col span={4}>
          <Center>
            <Text size='xl'> Faith </Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Text size='xl'> Family </Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Text size='xl'> Community </Text>
          </Center>
        </Grid.Col>
      </Grid>
      <Space h={20}/>
      <div>
        To create an atmosphere of brotherhood that equips men to become outstanding 
        leaders in their homes and communities. Through faith, we will bridge the gap 
      between men of today and men of tomorrow. 
      </div>

        <div>To unite men to become the best leaders </div>

        <div>To be a brotherhood that equips men to serve and lead their families and communities. </div>

        <div>Lead today so the next generation can lead tomorrow </div>

        <div>We are the representitive. We strive to represent </div>
*/}

    </div> 
  )
}
