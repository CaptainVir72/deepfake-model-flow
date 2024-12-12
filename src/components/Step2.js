import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Step2 = () => {
  const models = [
    { name: 'Anomaly', description: 'This model detects irregularities in data by analyzing deviations from expected behavior, which are indicative of deepfake manipulations or unusual patterns.' },
    { name: 'CrossVit', description: 'A vision transformer model that combines features from multiple image scales to enhance detection accuracy, making it highly effective for recognizing subtle inconsistencies in deepfake visuals.' },
    { name: 'PPG', description: 'Focuses on analyzing physiological signals like blood flow variations in the face, enabling detection of deepfakes by identifying unnatural patterns in pulse rhythms.' },
    { name: 'Audio', description: 'Evaluates the synchronization of audio and visual cues, detecting mismatches in speech patterns, lip movements, and acoustic anomalies characteristic of deepfakes.' }
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

