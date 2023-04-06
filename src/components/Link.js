import React from 'react';
import { useLink } from 'react-aria';

export default function Link(props) {
  let ref = React.useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
      className={`!outline-none !border-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-md ${props.className}`}
    >
      {props.children}
    </a>
  );
}