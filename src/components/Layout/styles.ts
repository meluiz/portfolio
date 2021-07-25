import styled, { css } from 'styled-components'

interface AreaProps {
  fluid?: boolean;
  size?: string;
}

interface GridLayoutProps {
  column?: boolean;
  align?: 'left' | 'center' | 'right';
  justify?: 'left' | 'center' | 'right' | 'between';
}

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  background: ${props => props.theme.colors.background.main};
`

export const Area = styled.div<AreaProps>`
  width: 100%;
  max-width: ${(props) => props.size ? props.theme.screens.lg : props.theme.screens[props.size]};
  ${props => props.fluid && 'height: 100%;'}
  display: block;
  padding: 0 24px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`

export const GridLayout = styled.div<GridLayoutProps>`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  align-items: ${ (props) => {
    switch (props.align) {
      case 'left':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      default:
        return 'flex-start'
    }
  }};
  justify-content:  ${ (props) => {
    switch (props.justify) {
      case 'left':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      case 'between':
        return 'space-between'
      default:
        return 'flex-start'
    }
  }};
  gap: var(--gap);
`

export const ColumnLayout = styled.div`
  flex: var(--flex);
`