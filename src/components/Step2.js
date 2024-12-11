import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Step2 = () => {
  const models = [
    { name: 'Anomaly', description: 'Detects unusual patterns or outliers in data.' },
    { name: 'CrossVit', description: 'Cross-modal vision transformer for image analysis.' },
    { name: 'PPG', description: 'Photoplethysmography for heart rate estimation from video.' },
    { name: 'Audio', description: 'Analyzes audio features for deepfake detection.' }
  ]

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Step 2: Comprehensive Model Components</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {models.map((model, index) => (
            <AccordionItem key={model.name} value={`item-${index}`}>
              <AccordionTrigger>{model.name}</AccordionTrigger>
              <AccordionContent>{model.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default Step2

