"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Database, Wrench, Globe } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programmeertalen",
      description: "Kerntalen voor web- en applicatieontwikkeling",
      skills: [
        { name: "PHP", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "SQL", level: 85 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Moderne webontwikkeling technologieën",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Alpine.js", level: 80 },
        { name: "jQuery", level: 90 },
        { name: "Vue.js", level: 75 },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Server-side frameworks en technologieën",
      skills: [
        { name: "PHP", level: 95 },
        { name: "Symfony", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "CodeIgniter", level: 85 },
        { name: "Yii/Zend", level: 75 },
      ],
    },
    cms: {
      icon: <Globe className="h-6 w-6" />,
      title: "CMS Platforms",
      description: "Content Management Systemen",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "Magento", level: 85 },
        { name: "Drupal", level: 80 },
        { name: "Joomla", level: 75 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      description: "Database management en optimalisatie",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 80 },
        { name: "SQLite", level: 80 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "DevOps & Tools",
      description: "Tools en omgevingen voor ontwikkeling",
      skills: [
        { name: "Git/GitHub/GitLab", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS/GCP", level: 80 },
        { name: "Linux", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "Jenkins", level: 75 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
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
            Vaardigheden
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technische Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} meer</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Met uitgebreide ervaring in zowel frontend als backend development, breng ik een alomvattend begrip van 
            webontwikkeling principes naar elk project. Gespecialiseerd in PHP, JavaScript en API integraties.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
