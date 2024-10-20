"use client"
import {useState, ChangeEvent} from 'react'
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPicker() {

    const [color, setColor] = useState<string>("#000000")
    const handleColorChange = (e: ChangeEvent<HTMLInputElement>):void =>{
setColor(e.target.value)
    }
 const copyToClipboard = () => {
    navigator.clipboard.writeText(color)
    alert("Copy To Clipboard")
 }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#60a5fa] animate-gradient-xy">
    {/* Center the color picker card within the screen */}
    <Card className="w-full max-w-md mx-auto p-10 grid gap-10 shadow-xl transform transition-all duration-500 hover:scale-105 rounded-3xl bg-gradient-to-br from-[#ffffffaa] to-[#e0e7ff]">
      {/* Header with title and description */}
      <div className="text-center space-y-4">
        <CardTitle className="text-4xl font-extrabold text-[#1e40af] drop-shadow-lg">
          🌈 Color Picker 🌈
        </CardTitle>
        <CardDescription className="text-xl text-[#334155]">
          Choose a color, then copy the Hex and RGB values!
        </CardDescription>
      </div>
  
      {/* Main content area for color display and input */}
      <div className="grid gap-6">
        {/* Display the selected color */}
        <div
          className="w-full h-48 rounded-xl border-8 border-[#1e40af] shadow-inner transition-colors duration-300 ease-in-out"
          style={{ backgroundColor: color }}
        />
  
        {/* Display the color value in hex and RGB format, and button to copy */}
        <div className="grid gap-4 text-center">
          <div className="text-3xl font-semibold text-[#1e40af]">
            {color}
          </div>
          <div className="text-lg text-[#475569]">
            RGB: {parseInt(color.slice(1, 3), 16)},{" "}
            {parseInt(color.slice(3, 5), 16)},{" "}
            {parseInt(color.slice(5, 7), 16)}
          </div>
          <Button
            onClick={copyToClipboard}
            variant="default"
            className="w-full py-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold rounded-full transition-transform duration-300 hover:scale-105"
          >
            📋 Copy to Clipboard 📋
          </Button>
        </div>
  
        {/* Input field to pick a color */}
        <Input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-full h-16 border-0 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl"
        />
      </div>
    </Card>
  </div>
  )
}
