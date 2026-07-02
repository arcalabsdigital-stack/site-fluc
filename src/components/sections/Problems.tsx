import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'

const problems = [
  {
    title: 'Não sabe o lucro mensal real',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    title: 'Não consegue planejar fluxo de caixa',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    title: 'Não sabe onde está gastando mais',
    imageUrl:
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    title: 'Não conhece o valor da sua empresa',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=400&q=80',
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
                <div className="w-full sm:w-2/5 aspect-square relative bg-slate-100 overflow-hidden">
                  <img
                    src={problem.imageUrl}
                    alt={problem.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
