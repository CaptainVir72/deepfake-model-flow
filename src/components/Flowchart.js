"use client";
import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Arrow from './Arrow'
import Image from 'next/image'
import ClassificationReport from './ClassificationReport'

const Flowchart = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedModel, setSelectedModel] = useState(null)

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    if (model === 'Comprehensive') {
      setCurrentStep(2)
    } else {
      setCurrentStep(1)
    }
  }

  const handleChoice = (choice) => {
    if (choice === 'Fake') {
      setCurrentStep(4)
    } else {
      setCurrentStep(5) // End of flowchart
    }
  }

  const getFlowchartImage = () => {
    switch (selectedModel) {
      case 'Anomaly':
        return '/anomalyflow.png'
      case 'CrossVit':
        return '/crossvitflow.png'
      case 'PPG':
        return '/ppgflow.png'
      case 'Audio':
        return '/audioflow.png'
      default:
        return null
    }
  }

  const getAdditionalImage = () => {
    switch (selectedModel) {
      case 'Anomaly':
        return '/graph.jpg'
      case 'CrossVit':
        return '/confusionmatrix1.jpg'
      case 'PPG':
        return '/confusionmatrix2.jpg'
      case 'Audio':
        return '/confusionmatrix3.jpg'
      default:
        return null
    }
  }

  return (
    <div className="flowchart max-w-4xl mx-auto">
      <Step1 onModelSelect={handleModelSelect} selectedModel={selectedModel} />
      {selectedModel && selectedModel !== 'Comprehensive' && (
        <div className="mt-6 mb-6 space-y-6">
          <Image
            src={getFlowchartImage()}
            alt={`${selectedModel} Flowchart`}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {getAdditionalImage() && (
            <Image
              src={getAdditionalImage()}
              alt={`${selectedModel} Additional Image`}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
          {(selectedModel === 'CrossVit' || selectedModel === 'PPG' || selectedModel === 'Audio') && (
            <ClassificationReport model={selectedModel} />
          )}
        </div>
      )}
      {selectedModel === 'Comprehensive' && (
        <>
          <Arrow />
          <Step2 />
          <Arrow />
          <Step3 onChoice={handleChoice} />
          {currentStep === 4 && (
            <>
              <Arrow />
              <Step4 />
            </>
          )}
          {currentStep === 5 && (
            <div className="text-center mt-8 p-6 bg-green-100 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">End of Flowchart</h2>
              <p className="text-lg">The content has been identified as real.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Flowchart

