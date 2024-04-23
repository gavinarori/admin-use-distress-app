'use client'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import React, { useState, useEffect, useRef, FC } from "react";
import L from 'leaflet';
import "leaflet-defaulticon-compatibility";
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
  } from "lucide-react"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
  import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
  interface MarkerData {
    coordinates: [number, number];
    title: string;
  }

  export default function Dashboard() {
    const [loading, setLoading] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [crimeData, setCrimeData] = useState<any[]>([]);

  const mapRef = useRef<any | null>(null);

  const myIcon = L.icon({
    iconUrl: '/placeholder.png',
    iconSize: [38, 39],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });

  const crimeIcon = L.icon({
    iconUrl: '/alarm.png',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });

  const crimes = L.icon({
    iconUrl: 'https://lottie.host/embed/d1626c86-8361-471a-88a9-7baaff52fa06/Hrom5D9Mo4.json',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });

  const BoundsCircle: FC<{ center: [number, number], radius: number }> = ({ center, radius }) => {
    const map = useMap();

    const topLeft = map.latLngToLayerPoint(center).subtract([radius, radius]);
    const bottomRight = map.latLngToLayerPoint(center).add([radius, radius]);
    const bounds = L.bounds(topLeft, bottomRight);

    useEffect(() => {
      const rectangle = L.rectangle(L.latLngBounds(map.layerPointToLatLng(topLeft), map.layerPointToLatLng(bottomRight))).addTo(map);
      return () => {
        map.removeLayer(rectangle);
      };
    }, [map, bounds]);

    return null;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);


  
  const ZoomHandler: FC = () => {
    const map = useMap();

    useEffect(() => {
      map.on('zoomend', () => {
        setLoading(false);
      });
    }, [map]);

    return null;
  };

  // Filter crime data based on bounds and radius
  

    return (
      <div className="grid h-screen w-full pl-[53px]">
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
        <img src="/next.svg" className="w-10 h-10" alt="tailus logo" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <Sheet>
      <SheetTrigger asChild>
      <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Models"
              >
                <Bot className="size-5" />
              </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <fieldset className="grid gap-6 rounded-lg border p-4 max-h-[100vh]">
  <div className="grid gap-3">
    <Label htmlFor="incident-description">Incident Description</Label>
    <Textarea id="incident-description" placeholder="Enter incident description" />
  </div>
  <div className="grid gap-3">
    <Label htmlFor="witness-info">Witness Information</Label>
    <Textarea id="witness-info" placeholder="Enter witness information" />
  </div>
  <div className="grid gap-3">
    <Label htmlFor="suspect-info">Suspect Information</Label>
    <Textarea id="suspect-info" placeholder="Enter suspect information" />
  </div>
  <div className="grid gap-3">
    <Label htmlFor="actions-taken">Actions Taken</Label>
    <Textarea id="actions-taken" placeholder="Enter details of actions taken" />
  </div>
</fieldset>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="mt-4">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Help"
              >
                <LifeBuoy className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Account"
              >
                <SquareUser className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold uppercase leading-10 text-red-600"> DISTRESS</h1>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Settings className="size-4" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Configuration</DrawerTitle>
                  <DrawerDescription>
                    Configure the settings for the model and messages.
                  </DrawerDescription>
                </DrawerHeader>
                <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Incident Details
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="incident-type">Incident Type</Label>
              <Select>
                <SelectTrigger id="incident-type" className="items-start [&_[data-description]]:hidden">
                  <SelectValue placeholder="Select an incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="theft">Theft</SelectItem>
                  <SelectItem value="assault">Assault</SelectItem>
                  <SelectItem value="vandalism">Vandalism</SelectItem>
                  {/* Add more incident types as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Location</Label>
              <Input id="location" type="text" placeholder="Enter location" />
            </div>
            {/* Add more fields for incident details as needed */}
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4">
  {/* Additional fields for police report */}
  <div className="grid gap-3">
    <Label htmlFor="complainant-name">Complainant Name</Label>
    <Input id="complainant-name" type="text" placeholder="Enter complainant's name" />
  </div>
  <div className="grid gap-3">
    <Label htmlFor="complainant-contact">Complainant Contact</Label>
    <Input id="complainant-contact" type="text" placeholder="Enter complainant's contact information" />
  </div>
</fieldset>
              </DrawerContent>
            </Drawer>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-1.5 text-sm bg-[#FF8080] text-white"
            >
              <Share className="size-3.5 text-white" />
              Share
            </Button>
          </header>
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
            >
              <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Incident Details
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="incident-type">Incident Type</Label>
              <Select>
                <SelectTrigger id="incident-type" className="items-start [&_[data-description]]:hidden">
                  <SelectValue placeholder="Select an incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="theft">Theft</SelectItem>
                  <SelectItem value="assault">Assault</SelectItem>
                  <SelectItem value="vandalism">Vandalism</SelectItem>
                  {/* Add more incident types as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Location</Label>
              <Input id="location" type="text" placeholder="Enter location" />
            </div>
            {/* Add more fields for incident details as needed */}
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4">
  {/* Additional fields for police report */}
  <div className="grid gap-3">
    <Label htmlFor="complainant-name">Complainant Name</Label>
    <Input id="complainant-name" type="text" placeholder="Enter complainant's name" />
  </div>
  <div className="grid gap-3">
    <Label htmlFor="complainant-contact">Complainant Contact</Label>
    <Input id="complainant-contact" type="text" placeholder="Enter complainant's contact information" />
  </div>
 
</fieldset>

              </form>
            </div>
            <div className=" flex h-full min-h-[100vh] flex-col rounded-xl bg-muted/50 p-2 lg:col-span-2">
              <div className="flex-1 ">
              <MapContainer
        center={userLocation || [-1.1973489, 36.9301873]}
        zoom={11}
        style={{ width: "auto" }}
        className="h-[100vh] overflow-hidden inset-0 z-0  "
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {userLocation && <Marker position={userLocation} icon={myIcon}><Popup>Your Location</Popup></Marker>}
        
        <ZoomHandler />
      </MapContainer>
              </div>
              <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
  