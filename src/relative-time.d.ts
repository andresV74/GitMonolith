import {RelativeTimeElement} from '@github/relative-time-element'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'relative-time': React.DetailedHTMLProps<React.HTMLAttributes<RelativeTimeElement>, RelativeTimeElement> &
        Partial<Omit<RelativeTimeElement, keyof HTMLElement>>
    }
  }
}