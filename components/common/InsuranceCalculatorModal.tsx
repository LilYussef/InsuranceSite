"use client"

import { useState, useEffect } from "react"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"

interface CalculatorResult {
  type: string
  age: number
  coverage: string
  estimate: number
  timestamp: number
}

export default function InsuranceCalculatorModal() {
  const [insuranceType, setInsuranceType] = useState("health")
  const [age, setAge] = useState(30)
  const [coverageLevel, setCoverageLevel] = useState("standard")
  const [estimate, setEstimate] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Load last result from localStorage on mount
  useEffect(() => {
    const lastResult = localStorage.getItem("lastInsuranceEstimate")
    if (lastResult) {
      const parsedResult: CalculatorResult = JSON.parse(lastResult)
      setInsuranceType(parsedResult.type)
      setAge(parsedResult.age)
      setCoverageLevel(parsedResult.coverage)
      setEstimate(parsedResult.estimate)
    }
  }, [])

  const calculateEstimate = () => {
    setIsCalculating(true)
    setEstimate(null) // Clear previous estimate

    // Simulate API call or complex calculation
    setTimeout(() => {
      let basePrice = 0
      switch (insuranceType) {
        case "health":
          basePrice = 100
          break
        case "car":
          basePrice = 80
          break
        case "property":
          basePrice = 120
          break
        case "travel":
          basePrice = 50
          break
        default:
          basePrice = 0
      }

      // Adjust based on age
      if (age < 25) basePrice *= 1.2
      else if (age > 60) basePrice *= 1.5

      // Adjust based on coverage level
      switch (coverageLevel) {
        case "basic":
          basePrice *= 0.8
          break
        case "standard":
          basePrice *= 1.0
          break
        case "premium":
          basePrice *= 1.5
          break
      }

      const finalEstimate = Number.parseFloat(basePrice.toFixed(2))
      setEstimate(finalEstimate)
      setIsCalculating(false)

      const result: CalculatorResult = {
        type: insuranceType,
        age,
        coverage: coverageLevel,
        estimate: finalEstimate,
        timestamp: Date.now(),
      }
      localStorage.setItem("lastInsuranceEstimate", JSON.stringify(result))
      toast.success("Estimate calculated!", {
        description: `Your estimated premium is $${finalEstimate.toFixed(2)}/month.`,
      })
    }, 1000) // Simulate network delay
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  }

  return (
    <DialogContent className="sm:max-w-[425px] bg-card text-foreground border-gray-800">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.2 }}
        >
          <DialogHeader>
            <DialogTitle className="text-white">Insurance Calculator</DialogTitle>
            <DialogDescription className="text-gray-400">
              Get an instant estimate for your insurance premium.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="insuranceType" className="text-right text-gray-300">
                Type
              </Label>
              <Select value={insuranceType} onValueChange={setInsuranceType}>
                <SelectTrigger className="col-span-3 bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="property">Property</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="age" className="text-right text-gray-300">
                Age ({age})
              </Label>
              <Slider id="age" min={18} max={80} step={1} value={[age]} onValueChange={(val) => setAge(val[0])} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="coverageLevel" className="text-right text-gray-300">
                Coverage
              </Label>
              <Select value={coverageLevel} onValueChange={setCoverageLevel}>
                <SelectTrigger className="col-span-3 bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Select coverage" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={calculateEstimate} disabled={isCalculating} className="bg-primary hover:bg-primary/90">
              {isCalculating ? "Calculating..." : "Get Estimate"}
            </Button>
          </div>
          <AnimatePresence>
            {estimate !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-6 rounded-md bg-gray-800 p-4 text-center text-white"
              >
                <h3 className="text-xl font-semibold">Estimated Monthly Premium:</h3>
                <p className="mt-2 text-4xl font-bold text-primary">${estimate.toFixed(2)}</p>
                <p className="mt-2 text-sm text-gray-400">This is an estimate. Final price may vary.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </DialogContent>
  )
}
