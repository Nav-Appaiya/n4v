"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "Een volledig uitgerust e-commerce platform met productbeheer.",
      description:
        "Een volledig uitgerust e-commerce platform met productbeheer, winkelwagen functionaliteit en betalingsverwerking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
      features: [
        "Voorraadbeheer systeem",
        "Realtime voorraad tracking",
        "Veilige betalingsverwerking",
        "Orderbeheer dashboard",
        "Klantanalytics",
      ],
      demoLink: "#",
      githubLink: "https://github.com/nav-appaiya",
      fullDescription:
        "Dit e-commerce platform biedt bedrijven een complete oplossing voor online verkoop. Gebouwd met PHP en Laravel voor hoge prestaties en betrouwbaarheid. Functies omvatten een responsief ontwerp, productcatalogus met filter- en zoekmogelijkheden, winkelwagen functionaliteit, veilige checkout integratie, gebruikersauthenticatie en een admin dashboard voor het beheren van producten, bestellingen en klanten.",
    },
    {
      id: 2,
      title: "API Integratie Dashboard",
      shortDescription: "Een dashboard voor het beheren en monitoren van API integraties.",
      description: "Een uitgebreid dashboard voor het koppelen en monitoren van verschillende API's.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "React", "Node.js", "OpenAPI"],
      features: [
        "Meerdere API connecties",
        "Realtime monitoring",
        "Error logging",
        "Rate limiting beheer",
        "Webhook configuratie",
      ],
      demoLink: "#",
      githubLink: "https://github.com/nav-appaiya",
      fullDescription:
        "Dit API integratie dashboard helpt teams hun externe API verbindingen te beheren en monitoren. Gebouwd met React voor de frontend en Node.js voor de backend, biedt het uitgebreide mogelijkheden voor API management. Functies omvatten API connectie configuratie, realtime status monitoring, foutafhandeling en logging, en gedetailleerde analytics.",
    },
    {
      id: 3,
      title: "Content Management Systeem",
      shortDescription: "Een op maat gemaakt CMS voor contentbeheer.",
      description: "Een flexibel content management systeem met uitgebreide aanpassingsmogelijkheden.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "Symfony", "MySQL", "Alpine.js"],
      features: [
        "Drag & drop editor",
        "Multi-taal ondersteuning",
        "Media bibliotheek",
        "SEO tools",
        "Gebruikersbeheer",
      ],
      demoLink: "#",
      githubLink: "https://github.com/nav-appaiya",
      fullDescription:
        "Dit custom CMS biedt een flexibele oplossing voor contentbeheer. Gebouwd met PHP en Symfony, biedt het een intuïtieve interface voor het maken en beheren van content. De applicatie ondersteunt meerdere talen, heeft een uitgebreide media bibliotheek en biedt geavanceerde SEO mogelijkheden.",
    },
    {
      id: 4,
      title: "WordPress Webshop",
      shortDescription: "Een custom WordPress webshop met WooCommerce.",
      description: "Een op maat gemaakte WordPress webshop met uitgebreide WooCommerce integratie.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["WordPress", "WooCommerce", "PHP", "jQuery"],
      features: ["Custom thema", "Betalingsintegraties", "Voorraadbeheer", "Orderverwerking", "Klantaccounts"],
      demoLink: "#",
      githubLink: "https://github.com/nav-appaiya",
      fullDescription:
        "Deze WordPress webshop is gebouwd met een custom thema en uitgebreide WooCommerce functionaliteit. Het biedt een naadloze winkelervaring met meerdere betalingsmethoden, geautomatiseerde orderverwerking en een gebruiksvriendelijk beheerportaal.",
    },
    {
      id: 5,
      title: "Magento E-commerce",
      shortDescription: "Een enterprise-level Magento webwinkel.",
      description: "Een schaalbare Magento e-commerce oplossing voor grote productcatalogi.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Magento", "PHP", "MySQL", "Redis"],
      features: [
        "Multi-store configuratie",
        "Geavanceerde zoekfunctie",
        "Productconfigurator",
        "B2B functionaliteit",
        "Performance optimalisatie",
      ],
      demoLink: "#",
      githubLink: "https://github.com/nav-appaiya",
      fullDescription:
        "Deze Magento implementatie biedt een enterprise-level e-commerce oplossing. Met ondersteuning voor meerdere winkels, geavanceerde zoekfunctionaliteit en B2B mogelijkheden is het ideaal voor grote ondernemingen met complexe eisen.",
    },
    {
      id: 6,
      title: "React Dashboard",
      shortDescription: "Een moderne React dashboard applicatie.",
      description: "Een interactief dashboard gebouwd met React en moderne technologieën.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
      features: [
        "Realtime data updates",
        "Interactieve grafieken",
        "Gebruikersbeheer",
        "Dark mode ondersteuning",
        "Responsief ontwerp",
      ],
      demoLink: "#",
      githubLink: "https://github.com/nav-appaiya",
      fullDescription:
        "Dit moderne React dashboard biedt uitgebreide data visualisatie mogelijkheden. Gebouwd met Next.js en Tailwind CSS, biedt het een snelle en responsieve gebruikerservaring met realtime data updates en interactieve grafieken.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Uitgelichte Projecten</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Belangrijkste Functies:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Meer Info
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Belangrijkste Functies:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Bekijk Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
