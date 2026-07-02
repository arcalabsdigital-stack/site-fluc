import { SectionWrapper } from '@/components/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  CalendarClock,
  ArrowRightLeft,
  Scale,
  TrendingUp,
  FileBarChart,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
} from 'lucide-react'

const navItems = [
  { label: 'Início', icon: LayoutDashboard, active: true },
  { label: 'Planejamento', icon: CalendarClock },
  { label: 'Transações', icon: ArrowRightLeft },
  { label: 'Conciliação', icon: Scale },
  { label: 'DRE/Valuation', icon: TrendingUp },
  { label: 'Relatórios', icon: FileBarChart },
  { label: 'Configurações', icon: Settings },
]

const summaryCards = [
  {
    label: 'Saldo',
    value: 'R$ 48.250,80',
    delta: '+5,2%',
    trend: 'up' as const,
    icon: Wallet,
    accent: 'text-blue-600 bg-blue-50',
  },
  {
    label: 'Receitas',
    value: 'R$ 32.400,00',
    delta: '+12,4%',
    trend: 'up' as const,
    icon: ArrowUpRight,
    accent: 'text-emerald-600 bg-emerald-50',
  },
  {
    label: 'Despesas',
    value: 'R$ 18.930,45',
    delta: '-3,1%',
    trend: 'down' as const,
    icon: ArrowDownRight,
    accent: 'text-rose-600 bg-rose-50',
  },
  {
    label: 'Lucro',
    value: 'R$ 13.469,55',
    delta: '+28,7%',
    trend: 'up' as const,
    icon: TrendingUp,
    accent: 'text-violet-600 bg-violet-50',
  },
]

const chartData = [
  { month: 'Jan', entrada: 22, saida: 15 },
  { month: 'Fev', entrada: 26, saida: 17 },
  { month: 'Mar', entrada: 24, saida: 14 },
  { month: 'Abr', entrada: 30, saida: 19 },
  { month: 'Mai', entrada: 28, saida: 16 },
  { month: 'Jun', entrada: 32, saida: 18 },
  { month: 'Jul', entrada: 35, saida: 20 },
  { month: 'Ago', entrada: 33, saida: 17 },
  { month: 'Set', entrada: 38, saida: 21 },
]

const transactions = [
  {
    desc: 'Venda de produtos - Loja online',
    cat: 'Receita',
    value: 'R$ 4.280,00',
    status: 'Realizado',
  },
  { desc: 'Aluguel comercial', cat: 'Despesa', value: '- R$ 2.100,00', status: 'Pendente' },
  { desc: 'Pagamento de fornecedor', cat: 'Despesa', value: '- R$ 1.540,50', status: 'Realizado' },
  {
    desc: 'Serviço prestado - Cliente XP',
    cat: 'Receita',
    value: 'R$ 3.600,00',
    status: 'Realizado',
  },
  { desc: 'Assinatura de software', cat: 'Despesa', value: '- R$ 89,90', status: 'Pendente' },
  {
    desc: 'Comissão de vendas - Setembro',
    cat: 'Receita',
    value: 'R$ 1.250,00',
    status: 'Pendente',
  },
]

const chartW = 640
const chartH = 220
const chartPad = 32
const maxVal = 40

function buildPath(key: 'entrada' | 'saida') {
  const step = (chartW - chartPad * 2) / (chartData.length - 1)
  return chartData
    .map((d, i) => {
      const x = chartPad + i * step
      const y = chartH - chartPad - (d[key] / maxVal) * (chartH - chartPad * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

function buildArea() {
  const step = (chartW - chartPad * 2) / (chartData.length - 1)
  const top = chartData
    .map((d, i) => {
      const x = chartPad + i * step
      const y = chartH - chartPad - (d.entrada / maxVal) * (chartH - chartPad * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
  const lastX = chartPad + (chartData.length - 1) * step
  return `${top} L${lastX} ${chartH - chartPad} L${chartPad} ${chartH - chartPad} Z`
}

export function DashboardPreview() {
  return (
    <SectionWrapper id="dashboard-preview" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full mb-4">
            Demonstração
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tudo numa só tela, claro e organizado.
          </h2>
          <p className="text-lg text-slate-600">
            Veja como o Fluc organiza sua rotina financeira com um dashboard intuitivo e
            profissional.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-elevation overflow-hidden bg-slate-50">
            <div className="flex flex-col lg:flex-row min-h-[480px]">
              {/* Sidebar mockup */}
              <aside className="lg:w-60 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 p-4">
                <div className="flex items-center gap-2 mb-6 px-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-slate-900">Fluc</span>
                </div>
                <nav className="flex lg:flex-col gap-1 overflow-x-auto">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                        item.active
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50',
                      )}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Dashboard content */}
              <div className="flex-1 p-4 md:p-6 space-y-6">
                {/* Summary cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {summaryCards.map((card) => (
                    <Card
                      key={card.label}
                      className="rounded-xl border-slate-200 shadow-none bg-white"
                    >
                      <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] md:text-xs font-medium text-slate-500 uppercase tracking-wide">
                            {card.label}
                          </span>
                          <div
                            className={cn(
                              'w-7 h-7 rounded-lg flex items-center justify-center',
                              card.accent,
                            )}
                          >
                            <card.icon className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="text-base md:text-xl font-bold text-slate-900 leading-tight">
                          {card.value}
                        </div>
                        <div
                          className={cn(
                            'text-[11px] md:text-xs font-medium mt-1',
                            card.trend === 'up' ? 'text-emerald-600' : 'text-rose-600',
                          )}
                        >
                          {card.delta} vs mês anterior
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Chart */}
                <Card className="rounded-xl border-slate-200 shadow-none bg-white">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-slate-900">
                          Gráfico de projeção de caixa
                        </h4>
                        <p className="text-xs text-slate-500">Entradas vs Saídas — 2025</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Entradas
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Saídas
                        </span>
                      </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <svg
                        viewBox={`0 0 ${chartW} ${chartH}`}
                        className="w-full min-w-[480px] h-auto"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {[0, 10, 20, 30, 40].map((v) => {
                          const y = chartH - chartPad - (v / maxVal) * (chartH - chartPad * 2)
                          return (
                            <g key={v}>
                              <line
                                x1={chartPad}
                                y1={y}
                                x2={chartW - chartPad}
                                y2={y}
                                stroke="#e2e8f0"
                                strokeWidth="1"
                                strokeDasharray="3 3"
                              />
                              <text x="8" y={y + 4} fontSize="10" fill="#94a3b8">
                                {v}k
                              </text>
                            </g>
                          )
                        })}
                        <path d={buildArea()} fill="url(#areaGrad)" />
                        <path
                          d={buildPath('entrada')}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <path
                          d={buildPath('saida')}
                          fill="none"
                          stroke="#fb7185"
                          strokeWidth="2.5"
                          strokeDasharray="5 4"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        {chartData.map((d, i) => {
                          const step = (chartW - chartPad * 2) / (chartData.length - 1)
                          const x = chartPad + i * step
                          const y =
                            chartH - chartPad - (d.entrada / maxVal) * (chartH - chartPad * 2)
                          return (
                            <g key={d.month}>
                              <circle cx={x} cy={y} r="3" fill="#3b82f6" />
                              <text
                                x={x}
                                y={chartH - 12}
                                fontSize="10"
                                fill="#94a3b8"
                                textAnchor="middle"
                              >
                                {d.month}
                              </text>
                            </g>
                          )
                        })}
                      </svg>
                    </div>
                  </CardContent>
                </Card>

                {/* Transactions table */}
                <Card className="rounded-xl border-slate-200 shadow-none bg-white">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="text-sm md:text-base font-semibold text-slate-900 mb-4">
                      Transações recentes
                    </h4>
                    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                      <table className="w-full min-w-[560px] text-sm">
                        <thead>
                          <tr className="border-b border-slate-200 text-left text-xs text-slate-500 uppercase tracking-wide">
                            <th className="py-3 pr-4 font-medium">Descrição</th>
                            <th className="py-3 pr-4 font-medium">Categoria</th>
                            <th className="py-3 pr-4 font-medium">Valor</th>
                            <th className="py-3 font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map((tx, i) => (
                            <tr key={i} className="border-b border-slate-100 last:border-0">
                              <td className="py-3 pr-4 text-slate-800 font-medium">{tx.desc}</td>
                              <td className="py-3 pr-4 text-slate-500">{tx.cat}</td>
                              <td
                                className={cn(
                                  'py-3 pr-4 font-semibold',
                                  tx.value.startsWith('-') ? 'text-rose-600' : 'text-emerald-600',
                                )}
                              >
                                {tx.value}
                              </td>
                              <td className="py-3">
                                <span
                                  className={cn(
                                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
                                    tx.status === 'Pendente'
                                      ? 'bg-amber-50 text-amber-700'
                                      : 'bg-emerald-50 text-emerald-700',
                                  )}
                                >
                                  <span
                                    className={cn(
                                      'w-1.5 h-1.5 rounded-full',
                                      tx.status === 'Pendente' ? 'bg-amber-500' : 'bg-emerald-500',
                                    )}
                                  />
                                  {tx.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            *Imagem ilustrativa. Dados fictícios para demonstração da interface.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
