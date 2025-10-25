import React from 'react'
import SegHeader from './SegHeader'
import Container from './container'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


function Carusel() {

  const CaruselImages =[
    {
      id : 1,
      url :"https://thumbs.dreamstime.com/b/autumn-scenery-peaceful-alpine-lake-braies-location-dolomiti-alps-italy-europe-pragser-wildsee-national-park-fanes-sennes-397364526.jpg",
    },
    {
      id : 2,
      url :"https://thumbs.dreamstime.com/b/autumn-scenery-peaceful-alpine-lake-braies-location-dolomiti-alps-italy-europe-pragser-wildsee-national-park-fanes-sennes-397364526.jpg",
    },
    {
      id : 3,
      url :"https://thumbs.dreamstime.com/b/autumn-scenery-peaceful-alpine-lake-braies-location-dolomiti-alps-italy-europe-pragser-wildsee-national-park-fanes-sennes-397364526.jpg",
    },
    {
      id : 4,
      url :"https://thumbs.dreamstime.com/b/autumn-scenery-peaceful-alpine-lake-braies-location-dolomiti-alps-italy-europe-pragser-wildsee-national-park-fanes-sennes-397364526.jpg",
    },
    {
      id : 5,
      url :"https://thumbs.dreamstime.com/b/autumn-scenery-peaceful-alpine-lake-braies-location-dolomiti-alps-italy-europe-pragser-wildsee-national-park-fanes-sennes-397364526.jpg",
    },
        {
      id : 6,
      url :"https://thumbs.dreamstime.com/b/autumn-scenery-peaceful-alpine-lake-braies-location-dolomiti-alps-italy-europe-pragser-wildsee-national-park-fanes-sennes-397364526.jpg",
    },
  ]

  return (
    <div className='bg-base-100'>
      <SegHeader title='Carusel'/>
      <div className='py-20'>
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-3 bg-black rounded-3xl p-5 sm:p-10 md:p-15 lg:p-20'>
            <div className='grid col-span-2 justify-end items-end'>
              <Carousel
                opts={{
                  align: "end",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {CaruselImages.map((item,_,) => (
                    <CarouselItem key={item.id} className="h-full md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 w-full">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center">
                            <span>
                              <Image
                                src={item.url}
                                alt='Image'
                                width={200}
                                height={300}
                              >
                              </Image>
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className='flex justify-center items-center'>
              <h1 className='text-4xl font-bold text-green-500 w-1/3 text-center hidden sm:inline'>
                Most Popular Course Of Our Team
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Carusel