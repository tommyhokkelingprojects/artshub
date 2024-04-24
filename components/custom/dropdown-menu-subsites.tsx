"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownMenuSubsites: React.FC = () => {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Portalen</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Arts">Arts</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="HAIO">HAIO</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Migrant">Migrant</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="POH">POH</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="SEH">SEH</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="SO">SO</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuSubsites;