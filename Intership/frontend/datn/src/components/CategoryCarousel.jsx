import React, { useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
  "Software Engineer",
  "Web Developer",
  "Mobile Developer",
  "UI/UX Designer"
]

const CategoryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
}
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 3000) // Chuyển slide mỗi 3 giây

      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div>
      <Carousel 
        ref={emblaRef}
        className="w-full max-w-xl mx-auto my-20"
      >
        <CarouselContent className="-ml-1 gap-2">
          {
            category.map((cat, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3 pl-1">
                <Button onClick={() => searchJobHandler(cat)}>{cat}</Button>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
