import 'sanitize.css/typography.css'
import '../knopf.css'

export default {
  title: 'Test Suite',
}

export const State = () => `
  <button class="knopf" disabled>
    disabled
  </button>
  <button class="knopf">
    default
  </button>
  <button class="knopf active">
    active
  </button>
`

export const Type = () => `
  <button class="knopf inverse">
    inverse
  </button>
  <button class="knopf flat">
    flat
  </button>
  <button class="knopf pale">
    pale
  </button>
`

export const Spacing = () => `
  <button class="knopf even">
    even
  </button>
  <button class="knopf">
    regular
  </button>
  <button class="knopf wide">
    wide
  </button>
`

export const Corners = () => `
  <button class="knopf sharp">
    sharp
  </button>
  <button class="knopf">
    rounded
  </button>
  <button class="knopf pill">
    pill
  </button>
`

export const Size = () => `
  <button class="knopf small">
    small
  </button>
  <button class="knopf">
    base
  </button>
  <button class="knopf large">
    large
  </button>
  <button class="knopf huge">
    huge
  </button>
`

export const Link = () => `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a class="knopf link" href="#">incididunt</a> ut labore et dolore magna aliqua.</p>
`
