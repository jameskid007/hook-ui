import {useRef, type FC} from 'react'
import { Color } from './color'
import Handler from './Handler'
import Transform from './Transform'
import useColorDrag from './useColorDrag'
import { calculateColor, calculateOffset } from './utils'

const Palette: FC<{
  color: Color,
  onChange?: (color: Color) => void,
}> = ({ color, onChange }) => {
  const TransformRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [offset, dragStartHandle] = useColorDrag({
    containerRef,
    targetRef: TransformRef,
    color,
    onDragChange: offsetValue => {
      const newColor = calculateColor({
        offset: offsetValue,
        containerRef,
        targetRef: TransformRef,
        color
      })
      onChange?.(newColor)
    },
    calculate() {
      return calculateOffset(containerRef, TransformRef, color)
    },
  })

  return (
    <div className='color-picker-panel-palette' onMouseDown={dragStartHandle} ref={containerRef}>
      <Transform ref={TransformRef} offset={{x: offset.x, y: offset.y}}>
        <Handler color={color.toRgbString()} />
      </Transform>
      <div 
        className='color-picker-panel-palette-main'
        style={{
          backgroundColor: `hsl(${color.toHsl().h}, 100%, 50%)`,
          backgroundImage: 'linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))'
        }}
      >
      </div>
    </div>
  )
}

export default Palette
