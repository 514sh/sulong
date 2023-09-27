import { extendTheme } from '@chakra-ui/react'


const colors = {
  primary: '#005A8D', //header
  secondary: '#79A6DC', //background, secondary buttons, button outlines
  accent: '#FF6600', //cta, highlight
  text: '#333333',
  icon: '#00A86B', // map icon
  error: '#FF0000',
  tertiary: '#E5E5E5', //card background, borders, dividers
  progress: '#FFD700', //success notifications
  hover: '#4C80B7',
  hovercta: ' #FF4500'
}

const customTheme = extendTheme({
  colors,
  components: {
    Text: {
      baseStyle: {
        color: 'text',
        fontFamily: 'Lato'
      }
    },
    Button: {
      baseStyle: {
        color: 'primary',
        fontFamily: 'Poppins'
      },
      variants: {
        'main': {
          bg: 'secondary',
          color: 'text',
          _hover: { bg: 'hover', color: 'white' }
        },
        'cta': {
          color: 'white',
          bg: 'accent',
          _hover: { bg: 'hovercta', color: 'white' }
        }
      }
    }
  }
})

export default customTheme