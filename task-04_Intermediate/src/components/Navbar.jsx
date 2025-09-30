'use client'
import { Link } from "react-router-dom";

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UserIcon,
  HeartIcon,
  CalendarIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon as PhoneSolid, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Find Doctors', description: 'Book appointments with certified specialists', href: '#', icon: UserIcon },
  { name: 'Online Consultation', description: 'Virtual visits with healthcare providers', href: '#', icon: PhoneIcon },
  { name: 'Health Records', description: 'Secure access to your medical history', href: '#', icon: FingerPrintIcon },
  { name: 'Medicine Delivery', description: 'Get prescriptions delivered to your home', href: '#', icon: ArrowPathIcon },
  { name: 'Lab Tests', description: 'Schedule diagnostic tests and checkups', href: '#', icon: SquaresPlusIcon },
]

const callsToAction = [
  { name: 'Book Appointment', href: '#', icon: CalendarIcon },
  { name: 'Emergency Contact', href: '#', icon: PhoneSolid },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MediCare</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link 
            to="/" 
            className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-4 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-blue-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-5 text-blue-600 group-hover:text-blue-700" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2 p-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <item.icon aria-hidden="true" className="size-4 flex-none" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            Doctors
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            Departments
          </a>
          <Link to ='/aboutus' className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            About Us
          </Link>
          <Link to ='/contact' className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            Emergency: 911
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            Patient Login
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-bold text-gray-900">MediCare</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Link
                  to ='/'
                  className=" block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Doctors
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Departments
                </a>
                <Link
                  to ='/aboutus'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to ='/contact'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600"
                  >
                    Emergency: 911
                  </a>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 w-full">
                    Patient Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}