import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Step3 = ({ onChoice }) => {
  const weights = ['F1', 'F2', 'F3', 'F4']

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Step 3: Processing Weights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {weights.map((weight) => (
            <div key={weight} className="bg-muted p-4 rounded-md text-center font-semibold">
              {weight}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => onChoice('Real')} variant="outline">Real</Button>
          <Button onClick={() => onChoice('Fake')}>Fake</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Step3

