import 'sanitize.css/typography.css'
import '../knopf.css'

export default {
  title: 'Playground',
  argTypes: {
    type: {
      defaultValue: 'default',
      control: {
        type: 'inline-radio',
        options: ['default', 'inverse', 'flat', 'pale'],
      },
    },
    misc: {
      control: {
        type: 'inline-check',
        options: ['link', 'gradient'],
      },
    },
    border: {
      defaultValue: 'none',
      control: {
        type: 'inline-radio',
        options: ['none', 'traced', 'outlined'],
      },
    },
    spacing: {
      defaultValue: 'regular',
      control: {
        type: 'inline-radio',
        options: ['even', 'regular', 'wide'],
      },
    },
    corners: {
      defaultValue: 'rounded',
      control: {
        type: 'inline-radio',
        options: ['pill', 'rounded', 'sharp'],
      },
    },
    size: {
      defaultValue: 'base',
      control: {
        type: 'inline-radio',
        options: ['small', 'base', 'large', 'huge'],
      },
    },
    isBlock: {
      control: 'boolean',
      defaultValue: false,
    },
    alignment: {
      defaultValue: 'center',
      control: {
        type: 'inline-radio',
        options: ['start', 'center', 'end'],
      },
    },
    label: {
      control: 'text',
      defaultValue: 'Knopf',
    },
    isActive: {
      control: 'boolean',
      defaultValue: false,
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    hue: {
      defaultValue: 218,
      control: {
        type: 'range',
        min: 0,
        max: 360,
      },
    },
    saturation: {
      defaultValue: 77,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    luminosity: {
      defaultValue: 37,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
}

export const button = ({ type, misc, border, spacing, corners, size, isBlock, alignment, label, isActive, isDisabled, hue, saturation, luminosity }) => {
  const classes = ['knopf'].concat(misc)

  if (type !== 'default') classes.push(type)
  if (border !== 'none') classes.push(border)
  if (spacing !== 'regular') classes.push(spacing)
  if (corners !== 'rounded') classes.push(corners)
  if (size !== 'base') classes.push(size)
  if (isBlock) classes.push('block')
  if (alignment !== 'center') classes.push(alignment)
  if (isActive) classes.push('active')

  const styles = [
    `--knopf-hue: ${hue};`,
    `--knopf-saturation: ${saturation}%;`,
    `--knopf-luminosity: ${luminosity}%;`,
  ]

  return `
    <button class="${classes.join(' ')}"${isDisabled ? ' disabled' : ''} style="${styles.join('')}">
      ${label}
    </button>
  `
}
