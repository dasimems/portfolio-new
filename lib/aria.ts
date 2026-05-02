type AriaBool = boolean | undefined
type AriaCurrent = boolean | "page" | "step" | "location" | "date" | "time" | undefined

export type AriaState = {
  expanded?: AriaBool
  hidden?: AriaBool
  pressed?: AriaBool
  selected?: AriaBool
  checked?: AriaBool
  busy?: AriaBool
  disabled?: AriaBool
  invalid?: AriaBool
  modal?: AriaBool
  current?: AriaCurrent
  label?: string
  labelledby?: string
  describedby?: string
  controls?: string
  owns?: string
  haspopup?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog"
  live?: "off" | "polite" | "assertive"
}

export function aria(state: AriaState): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, value] of Object.entries(state)) {
    if (value === undefined) continue
    const attr = `aria-${key}`
    out[attr] = typeof value === "boolean" ? (value ? "true" : "false") : String(value)
  }
  return out
}
