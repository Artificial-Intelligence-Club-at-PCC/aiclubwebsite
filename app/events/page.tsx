import { EventsHero } from "@/components/events/events-hero"
import { EventsTimeline } from "@/components/events/events-timeline"
import { PastEvents } from "@/components/events/past-events"

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsTimeline />
      <PastEvents />
    </>
  )
}
