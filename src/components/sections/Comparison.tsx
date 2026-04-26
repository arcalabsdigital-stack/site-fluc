import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, XCircle } from 'lucide-react'

export function Comparison() {
  return (
    <SectionWrapper className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fluc vs. Mercado</h2>
          <p className="text-lg text-slate-600">
            Veja porque somos a escolha inteligente para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Fluc Card */}
          <Card className="border-2 border-blue-500 bg-blue-50/30 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary-gradient" />
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                Fluc
              </h3>
              <ul className="space-y-6">
                {[
                  'DRE e Valuation automáticos',
                  'Interface intuitiva e moderna',
                  'Preço acessível sem surpresas',
                  'Focado em MEI e pequenas empresas',
                  'Implantação em minutos',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-slate-800 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 mr-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Market Card */}
          <Card className="border border-slate-200 bg-slate-50 rounded-3xl opacity-80">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-3xl font-bold text-slate-500 mb-8">Outros Sistemas</h3>
              <ul className="space-y-6">
                {[
                  'Apenas planilhas complexas',
                  'Curva de aprendizado alta',
                  'Taxas extras e ocultas',
                  'Feito para grandes corporações',
                  'Meses para configurar',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-slate-500">
                    <XCircle className="w-6 h-6 text-slate-400 mr-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}
