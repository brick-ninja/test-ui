import React from 'react'
import clsx from 'clsx';

export default function Button({
  className,
  variant = 'primary',
  children
}) {
  let commonClassname = ''
  switch (variant) {
    case 'primary':
      commonClassname = 'text-[14px] bg-[#1991eb] px-[14px] text-white font-medium h-[32px] rounded-[4px]';
      break;
    default:
      commonClassname = ''
  }
  return (
    <button className={clsx(commonClassname, className)}>
      {children}
    </button>
  )
}
