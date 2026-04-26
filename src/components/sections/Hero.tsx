import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/dtgcobo29/video/upload/v1776976559/1474225_People_Technology_1280x720_1_d2odz6.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <div className="animate-fade-in-up max-w-4xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            O seu primeiro sistema de gestão financeira com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              DRE e Valuation
            </span>{' '}
            já inclusos
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Feito especialmente para MEIs e pequenas empresas que precisam de controle total e
            clareza sobre o valor do seu negócio.
          </p>

          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary-gradient text-white border-0 h-14 px-8 text-lg rounded-full hover:scale-105 hover:brightness-110 transition-all duration-300 animate-pulse-soft shadow-xl shadow-blue-900/20"
            >
              Comece Agora
            </Button>
            <p className="text-sm text-slate-300 font-medium">
              Teste grátis por 7 dias. Sem cartão de crédito.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
