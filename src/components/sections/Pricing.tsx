import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Start',
    price: '29',
    description: 'Para empreendedores individuais iniciando o controle.',
    features: [
      'Dashboard Financeiro',
      'Fluxo de Caixa',
      'Lançamentos Ilimitados',
      'Suporte por Email',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '49',
    description: 'A solução completa com DRE e Valuation inclusos.',
    features: [
      'Tudo do plano Start',
      'DRE Simplificado',
      'Valuation em Tempo Real',
      'Orçamento Inteligente',
      'Suporte Prioritário',
    ],
    highlighted: true,
    badge: 'Mais Popular',
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'Para empresas em crescimento e múltiplas equipes.',
    features: [
      'Tudo do plano Pro',
      'Múltiplos Usuários (até 5)',
      'Acesso para Contador',
      'Relatórios Customizados',
      'Gerente de Conta',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <SectionWrapper id="planos" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-slate-600">
            Escolha a melhor opção para o momento da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={cn(
                'relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl',
                plan.highlighted
                  ? 'border-2 border-primary shadow-elevation scale-100 lg:scale-105 z-10 bg-white'
                  : 'border-slate-200 bg-white shadow-sm',
              )}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-[#ff6b35] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              <CardHeader className="p-8 pb-4">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-2 h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline text-slate-900">
                  <span className="text-2xl font-semibold">R$</span>
                  <span className="text-5xl font-bold tracking-tight mx-1">{plan.price}</span>
                  <span className="text-slate-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <Check
                        className={cn(
                          'h-5 w-5 mr-3 shrink-0',
                          plan.highlighted ? 'text-primary' : 'text-slate-400',
                        )}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    'w-full h-12 rounded-xl text-md font-semibold transition-all hover:scale-[1.02]',
                    plan.highlighted
                      ? 'bg-primary-gradient text-white hover:brightness-110 shadow-lg shadow-blue-500/25'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200',
                  )}
                >
                  Assinar {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
