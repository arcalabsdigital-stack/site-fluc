import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'
import {
  LayoutDashboard,
  Wallet,
  LineChart,
  TrendingUp,
  Target,
  ArrowRightLeft,
  Repeat,
  History,
  Users,
} from 'lucide-react'

const features = [
  { title: 'Dashboard', desc: 'Visão geral do seu negócio em tempo real.', icon: LayoutDashboard },
  {
    title: 'Orçamento Inteligente',
    desc: 'Previsões automáticas baseadas no seu histórico.',
    icon: Wallet,
  },
  { title: 'DRE', desc: 'Demonstrativo de Resultados simplificado e direto.', icon: LineChart },
  {
    title: 'Valuation',
    desc: 'Saiba o valor de mercado da sua empresa atualizado.',
    icon: TrendingUp,
  },
  {
    title: 'Ponto de Equilíbrio',
    desc: 'Descubra quanto precisa vender para não ter prejuízo.',
    icon: Target,
  },
  {
    title: 'Fluxo de Caixa',
    desc: 'Entradas e saídas organizadas categoricamente.',
    icon: ArrowRightLeft,
  },
  {
    title: 'Transações Recorrentes',
    desc: 'Automatize o lançamento de contas fixas.',
    icon: Repeat,
  },
  {
    title: 'Histórico Completo',
    desc: 'Acesse dados financeiros de qualquer período.',
    icon: History,
  },
  { title: 'Múltiplos Usuários', desc: 'Acesso seguro para sócios e contadores.', icon: Users },
]

export function Features() {
  return (
    <SectionWrapper id="solucao" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-slate-600">
            Ferramentas de nível corporativo, simplificadas para o seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="border border-slate-100 shadow-subtle hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 rounded-2xl group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
