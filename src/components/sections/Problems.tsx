import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'

const problems = [
  {
    title: 'Não sabe o lucro mensal real',
    videoUrl: 'https://res.cloudinary.com/dtgcobo29/video/upload/1-nolucroreal_jfngjm.mp4',
  },
  {
    title: 'Não consegue planejar fluxo de caixa',
    videoUrl: 'https://res.cloudinary.com/dtgcobo29/video/upload/2-noplanejamento_mxasn3.mp4',
  },
  {
    title: 'Não sabe onde está gastando mais',
    videoUrl: 'https://res.cloudinary.com/dtgcobo29/video/upload/3-nosabegasto_ehbbl8.mp4',
  },
  {
    title: 'Não conhece o valor da sua empresa',
    videoUrl: 'https://res.cloudinary.com/dtgcobo29/video/upload/4-novaluation_rza9vv.mp4',
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
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={problem.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex items-center">
                  <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                    "{problem.title}"
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
