import { SectionWrapper } from '@/components/SectionWrapper'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <SectionWrapper className="py-0 relative overflow-hidden">
      <div className="bg-slate-900 absolute inset-0 -z-20" />
      <div className="absolute inset-0 bg-primary-gradient opacity-90 -z-10" />

      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse-soft -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse-soft delay-1000 -z-10" />

      <div className="container px-4 mx-auto py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Pronto para ter clareza total sobre as finanças do seu negócio?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
          Junte-se a centenas de empreendedores que já sabem o verdadeiro valor de suas empresas.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-white text-blue-700 hover:bg-slate-50 border-0 h-14 px-10 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20"
        >
          <a href="https://gestao-financeira-clone-0ca8c.goskip.app/signup">
            Comece Agora — 7 Dias Grátis
          </a>
        </Button>
      </div>
    </SectionWrapper>
  )
}
