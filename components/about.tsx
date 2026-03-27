"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            Over Mij
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie Ben Ik</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Een Gepassioneerde Developer</h3>
            <p className="text-muted-foreground mb-6">
              Ik ben Nav Appaiya, een Full Stack Web Developer met een passie voor het bouwen van moderne webapplicaties. 
              Ik werk graag aan projecten die gebruik maken van PHP, Javascript en het koppelen van API&apos;s aan applicaties.
            </p>
            <p className="text-muted-foreground mb-6">
              Met jarenlange ervaring in de industrie heb ik gewerkt aan diverse projecten, van kleine bedrijfswebsites 
              tot complexe enterprise applicaties. Ik ben altijd op zoek naar nieuwe uitdagingen en mogelijkheden om 
              mijn vaardigheden te verbeteren.
            </p>
            <p className="text-muted-foreground">
              Wanneer ik niet aan het coderen ben, verken ik nieuwe technologieën, draag ik bij aan open-source projecten, 
              of deel ik mijn kennis met de community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Schone Code</h4>
                      <p className="text-muted-foreground">
                        Ik schrijf onderhoudbare, schaalbare en efficiënte code volgens best practices en industriestandaarden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Probleemoplosser</h4>
                      <p className="text-muted-foreground">
                        Ik geniet van het aanpakken van complexe uitdagingen en het vinden van elegante oplossingen door creatief denken.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">API Integraties</h4>
                      <p className="text-muted-foreground">
                        Ik ben gespecialiseerd in het koppelen van API&apos;s aan applicaties en het bouwen van naadloze integraties.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
