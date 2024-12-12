import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Step4 = () => {
  const sourceVerifications = [
    'Gen-1_GAN_autoencoders',
    'Gen-2_AEINet(GAN-based)',
    'Gen-2_CNN_Based_Autoencoders (DeepFake-maker)',
    'Gen-2_Face_Swapping_Autoencoders',
    'Gen-2_Face_Swapping_ Landmarks_Extraction',
    'Gen-2_Patch_Based_GAN_Loss (GAN-based)',
    'Gen-3_DF-VAE'
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

