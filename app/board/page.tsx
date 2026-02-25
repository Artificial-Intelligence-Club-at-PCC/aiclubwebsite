import { BoardHero } from "@/components/board/board-hero"
import { BoardGrid } from "@/components/board/board-grid"
import { FoundingMembers } from "@/components/board/founding-members"

export default function BoardPage() {
  return (
    <>
      <BoardHero />
      <BoardGrid />
      <FoundingMembers />
    </>
  )
}
