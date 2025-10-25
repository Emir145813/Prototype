"use client"
import Container from './container'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SegHeader from './SegHeader'

function Coworkers() {

  const CoWorkersItems =[
    {
      id : 1,
      title : "Meta"
    },
    {
      id : 2,
      title : "FaceBook"
    },
    {
      id : 3,
      title : "Spotify"
    },
    {
      id : 4,
      title : "ScamSong"
    },
    {
      id : 5,
      title : "Emir"
    },
    {
      id : 6,
      title : "Meta"
    },
    {
      id : 7,
      title : "FaceBook"
    },
    {
      id : 8,
      title : "Spotify"
    },
    {
      id : 9,
      title : "ScamSong"
    },
    {
      id : 10,
      title : "Emir"
    },
  ]

  return (
    <div>
      <SegHeader title="Our Co-Workers"/>
      <div className='bg-base-100 py-20'>
        <Container>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
            plugins={[
            Autoplay({
              delay: 2000,
            }),
        ]}
          >
            <CarouselContent>
              {CoWorkersItems.map((item,_,) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <Card className='bg-base-100 border-none shadow-none'>
                      <CardContent className="flex items-center justify-center ">
                        <span className="text-3xl font-semibold text-green-400">{item.title}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </div>
    </div>
  )
}

export default Coworkers