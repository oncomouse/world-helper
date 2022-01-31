/** @jsxRuntime classic */
/** @jsx jsx */
import { useTheme, jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import mq from '../features/mq'

const Button = (props) => {
  const theme = useTheme()
  return (
    <button
      css={mq({
        margin: `${theme.button.margin}em`,
        width: [`${theme.button.widthSmall * props.width}em`, `${theme.button.width * props.width}em`],
        fontSize: `${theme.button.font.size * props.font}em`,
        height: `${theme.button.height * props.height}em`,
        border: `1px solid ${theme.colors[props.color] || props.color}`,
        borderRadius: 3,
        backgroundColor: theme.colors.light[props.color] || props.color
      })}
    {...props}
    >
      {props.children}
    </button>
  )
}
Button.propTypes = {
  font: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
Button.defaultProps = {
  width: 1,
  height: 1,
  font: 1,
  color: 'grey'
}

export default Button
