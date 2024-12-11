import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Step4 = () => {
  const sourceVerifications = [
    'Image Metadata',
    'Reverse Image Search',
    'Video Forensics',
    'Audio Analysis',
    'Social Media Tracking',
    'Fact-Checking',
    'Expert Consultation'
  ]

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Step 4: Source Verifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sourceVerifications.map((verification) => (
            <li key={verification} className="bg-muted p-4 rounded-md">{verification}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Step4

