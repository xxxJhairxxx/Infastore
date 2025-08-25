import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
    className?: string
}

const Container = ({children,className}:ContainerProps) => {
  return (
    <div className={`mx-auto max-w-[1400px] w-full ${className}`}>
        {children}
    </div>
  )
}

export default Container
