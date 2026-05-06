export default function BentoGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="grid grid-cols-[340px_1fr] gap-3 h-[calc(100vh-32px)] max-w-350 mx-auto">
        {children}
      </div>
    </div>
  )
}