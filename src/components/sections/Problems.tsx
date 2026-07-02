import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { FileChartColumn, CalendarClock, PieChart, Building2 } from 'lucide-react'

const problems = [
  {
    title: 'Não sabe o lucro mensal real',
    icon: FileChartColumn,
  },
  {
    title: 'Não consegue planejar fluxo de caixa',
    icon: CalendarClock,
  },
  {
    title: 'Não sabe onde está gastando mais',
    icon: PieChart,
  },
  {
    title: 'Não conhece o valor da sua empresa',
    icon: Building2,
  },
]

export function Problems() {
  return (
    <SectionWrapper className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Você sabe se está ganhando ou perdendo dinheiro?
          </h2>
          <p className="text-lg text-slate-600">
            A maioria dos empreendedores toma decisões baseadas em achismos porque as ferramentas
            atuais são muito complexas ou limitadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl group"
            >
              <CardContent className="p-0 flex flex-col sm:flex-row items-center h-full">
                <div className="w-full sm:w-2/5 aspect-square relative bg-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <problem.icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                </div>
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex items-center">
                  <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                    &quot;{problem.title}&quot;
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
