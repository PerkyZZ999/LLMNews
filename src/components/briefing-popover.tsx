import { Popover } from '@base-ui/react/popover'

export function BriefingPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="button">Open morning brief</Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={12}>
          <Popover.Popup className="briefing-popover">
            <p className="eyebrow">Daily brief</p>
            <h3>What LLMNews will highlight first</h3>
            <ul>
              <li>Fresh model launches and API releases</li>
              <li>Benchmarks, eval jumps, and context-window upgrades</li>
              <li>Fast source links back to labs and research posts</li>
            </ul>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
