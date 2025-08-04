import { Circle, Svg, View } from '@react-pdf/renderer'
import { FC, ReactNode } from 'react'

type ListItemProps = {
  children: ReactNode
}

export const ListItem: FC<ListItemProps> = ({ children }) => (
  <View style={{ flexDirection: 'row' }}>
    <Svg
      style={{
        width: 10,
        height: 10,
        marginTop: 3,
        marginRight: 5,
      }}
    >
      <Circle
        cx="5"
        cy="5"
        r="3"
        fill="black"
      />
    </Svg>
    {children}
  </View>
)
