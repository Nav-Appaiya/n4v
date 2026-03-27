"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Jan de Vries",
      position: "Product Manager bij TechBedrijf",
      content:
        "Samenwerken met Nav was een absolute plezier. Hij leverde ons project op tijd en overtrof onze verwachtingen qua kwaliteit en functionaliteit. Zijn aandacht voor detail en probleemoplossend vermogen zijn uitzonderlijk.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Maria Jansen",
      position: "CTO bij StartupNL",
      content:
        "Nav heeft ons geholpen om ons hele platform van de grond af aan te herbouwen. Zijn technische expertise en vermogen om onze bedrijfsbehoeften te begrijpen resulteerden in een product dat onze gebruikersbetrokkenheid aanzienlijk heeft verbeterd.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Peter van den Berg",
      position: "Oprichter van DesignStudio",
      content:
        "Ik was onder de indruk van Nav zijn vermogen om onze ontwerpvisie te vertalen naar een volledig functionele website. Hij was responsief, professioneel en gaf waardevolle suggesties die de algehele gebruikerservaring verbeterden.",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Sophie Bakker",
      position: "Marketing Director bij GroeiCo",
      content:
        "Nav ontwikkelde een custom analytics dashboard voor ons marketingteam dat heeft getransformeerd hoe we onze campagnes volgen en optimaliseren. Zijn oplossing was elegant, intuïtief en precies wat we nodig hadden.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Thomas Visser",
      position: "E-commerce Manager bij RetailPlus",
      content:
        "Het e-commerce platform ontwikkeld door Nav is een gamechanger voor ons bedrijf. Het is snel, veilig en onze klanten houden van de naadloze winkelervaring. We hebben een stijging van 40% in online verkoop gezien sinds de lancering.",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Referenties
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klanttevredenheid</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">&quot;{testimonial.content}&quot;</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
