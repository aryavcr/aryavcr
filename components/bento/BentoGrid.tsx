export default function BentoGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#eef0f2] p-4">
      <div className="grid grid-cols-[340px_1fr] gap-3 h-[calc(100vh-32px)] max-w-400 mx-auto">
        {children}
      </div>
    </div>
  )
}