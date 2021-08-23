import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Simple = Template.bind({})
Simple.args = {
  label:
    'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
}
