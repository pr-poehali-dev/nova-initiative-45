import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Линия гидравлического прессования",
    category: "Производство оборудования",
    image: "/placeholder.jpg",
    description:
      "Спроектировали и изготовили гидравлическую прессовую линию мощностью 400 тонн для завода металлоконструкций. Полный цикл: КД, производство, монтаж и обучение операторов.",
    tags: ["Гидравлика", "Автоматизация", "Под ключ"],
  },
  {
    title: "Модернизация токарных станков",
    category: "Модернизация",
    image: "/placeholder.jpg",
    description:
      "Провели модернизацию парка токарных станков на машиностроительном заводе: замена ЧПУ-систем, шпиндельных узлов, приводов подачи. Производительность выросла на 35%.",
    tags: ["ЧПУ", "Станкостроение", "Модернизация"],
  },
  {
    title: "Конвейерная система для пищевого производства",
    category: "Нестандартное оборудование",
    image: "/placeholder.jpg",
    description:
      "Разработали и смонтировали конвейерную линию из нержавеющей стали для кондитерского предприятия. Соответствует санитарным нормам, интегрирована с существующей автоматикой.",
    tags: ["Конвейеры", "Нержавеющая сталь", "Пищепром"],
  },
  {
    title: "Система вентиляции промышленного цеха",
    category: "Инженерные системы",
    image: "/placeholder.jpg",
    description:
      "Запроектировали и установили систему промышленной вентиляции для литейного цеха площадью 4 000 м². Вытяжка вредных примесей, приточные установки с рекуперацией тепла.",
    tags: ["Вентиляция", "Литейное производство", "Рекуперация"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши проекты</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реализованные объекты — лучшее подтверждение нашей компетенции. Каждый проект — это инженерная задача, решённая точно в срок.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-muted flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Обсудить похожий проект
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
