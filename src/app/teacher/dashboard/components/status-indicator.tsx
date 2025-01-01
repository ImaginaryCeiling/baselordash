'use client'

import { useState } from 'react'

interface StatusIndicatorProps {
  initialStatus: 'red' | 'yellow' | 'green'
  onChange?: (status: 'red' | 'yellow' | 'green') => void
}

export function StatusIndicator({ initialStatus, onChange }: StatusIndicatorProps) {
  const [status, setStatus] = useState(initialStatus)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextStatus = {
      red: 'yellow',
      yellow: 'green',
      green: 'red',
    }[status] as 'red' | 'yellow' | 'green'

    setStatus(nextStatus)
    onChange?.(nextStatus)
  }

  return (
    <button
      onClick={handleClick}
      className={`h-4 w-4 rounded-full ${
        status === 'red'
          ? 'bg-red-500'
          : status === 'yellow'
          ? 'bg-yellow-500'
          : 'bg-green-500'
      }`}
    />
  )
}

