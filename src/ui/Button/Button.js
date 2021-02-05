import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { white, grey2, black, primary, secondary } from '../common/colors'
import { primary as primaryGradient, secondary as secondaryGradient } from '../common/gradients'
import { level1, level2, level3, level4 } from '../common/shadows'

// Component
const Button = (props) => {
  const { children, type, disabled, theme, margin, ...other } = props

  return (
    <button type={type} disabled={disabled} {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        button {
          margin: ${margin};
          transition-duration: .4s; 
          padding: 0.7em 1.7em;
          border: none;
          border-radius: 1.4em;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          outline: none;
          font-size: 1em;
          color: ${ theme !== 'none' ? white : black };
          // box-shadow: ${ theme !== 'none' ? level2 : 'none' };
          background-color: ${ theme === 'primary' ? primary : theme === 'secondary' ? secondary : 'transparent' };
          background-image: ${ theme === 'primary' ? primaryGradient : theme === 'secondary' ? secondaryGradient : 'none' };
        }
        button:hover {
          // box-shadow: ${ level3 };
          box-shadow: 0 6px 10px 0 rgb(255 90 255 / 87%), 0 1px 18px 0 rgb(248 3 183), 0px -4px 11px 2px rgb(255 0 231);
          color: rgb(255 90 255)
        }
        button:active {
          // box-shadow: ${ level4 };
          box-shadow: -1px 13px 20px 0px rgb(255 90 255 / 87%), 1px -2px 20px 20px rgb(248 3 183), 0px -4px 20px 14px rgb(255 0 231);
          background-image: linear-gradient( 90deg, rgb(255 90 255) 10%, rgb(248 3 183) 100%);
          color: black;
        }
        button:disabled {
          color: ${ white };
          box-shadow: ${ level1 };
          background-color: ${ grey2 };
          background-image: none;
        }
      `}
      </style>
    </button>
  )
}

// Component Properties
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
}
Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: 'none'
}

export default Button