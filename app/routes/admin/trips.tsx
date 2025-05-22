import { Header } from 'components'
import React from 'react'

export default function Trips() {
  return (
    <main className="wrapper">
        <Header
        title="Trips"
        description="View and edit AI-generated travel plans"
        ctaText="Create a trip"
        ctaUrl="/trips/create"
      />
    </main>
  )
}
