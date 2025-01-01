interface StatusCardProps {
  title: string
  count: number
}

export function StatusCard({ title, count }: StatusCardProps) {
  return (
    <div className="flex min-w-[160px] items-center gap-4 rounded-lg bg-gray-100 p-4">
      <div>
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <p className="text-3xl font-bold">{count}</p>
      </div>
    </div>
  )
}

