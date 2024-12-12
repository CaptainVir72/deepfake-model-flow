import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Step1 = ({ onModelSelect, selectedModel }) => {
  const models = ['Anomaly', 'Efficient Net', 'PPG', 'Audio', 'Comprehensive']

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Step 1: Select ML Model</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {models.map((model) => (
            <Button
              key={model}
              onClick={() => onModelSelect(model)}
              variant={selectedModel === model ? "default" : "outline"}
              className="w-full"
            >
              {model}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Step1

