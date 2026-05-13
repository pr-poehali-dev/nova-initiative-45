import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Settings2",
    title: "Проектирование оборудования",
    description:
      "Разрабатываем конструкторскую документацию и 3D-модели под задачи заказчика. Учитываем специфику производства, нагрузки и условия эксплуатации — от эскиза до готового проекта.",
  },
  {
    icon: "Factory",
    title: "Серийное производство",
    description:
      "Изготавливаем детали и узлы крупными и малыми сериями. Собственные производственные мощности позволяют обеспечивать стабильное качество и выдерживать сроки.",
  },
  {
    icon: "Wrench",
    title: "Монтаж и пуско-наладка",
    description:
      "Специалисты выезжают на объект, устанавливают оборудование, проводят пуско-наладочные работы и обучают персонал. Сдаём «под ключ» с гарантией работоспособности.",
  },
  {
    icon: "Shield",
    title: "Гарантийное обслуживание",
    description:
      "Обеспечиваем гарантийный и постгарантийный сервис. Быстрое реагирование на заявки, складской запас запчастей, плановое ТО — ваше оборудование всегда в строю.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Модернизация",
    description:
      "Обновляем устаревшее оборудование: замена узлов, интеграция систем автоматизации, повышение производительности. Продлеваем ресурс техники без полной замены.",
  },
  {
    icon: "ClipboardList",
    title: "Технический консалтинг",
    description:
      "Помогаем выбрать оптимальное техническое решение, рассчитываем экономическую эффективность, сопровождаем проект на всех этапах — от ТЗ до сдачи объекта.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный цикл — от проектирования до сервисного обслуживания. Берёмся за нестандартные задачи и находим решения там, где другие отказывают.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Settings" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
