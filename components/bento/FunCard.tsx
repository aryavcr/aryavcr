export default function FunCard() {
  return (
    <div
      className="bg-card rounded-card flex flex-col flex-1 p-4"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/*placeholder rn */}
      <div className="flex-1 rounded-inner border-2 border-dashed border-border flex items-center justify-center">
        <span className="text-xs text-muted-foreground/50 select-none tracking-widest uppercase">
          Coming soon
        </span>
      </div>
    </div>
  )
}