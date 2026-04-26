import { SectionWrapper } from '@/components/SectionWrapper'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Preciso entender de contabilidade para usar o Fluc?',
    a: 'Não. O Fluc foi desenhado exatamente para quem não é contador. Nossa interface traduz termos complexos em informações visuais fáceis de entender.',
  },
  {
    q: 'Como funciona o cálculo do Valuation?',
    a: 'Utilizamos metodologias consagradas de mercado (como fluxo de caixa descontado e múltiplos) adaptadas para a realidade de pequenos negócios, atualizando o valor da sua empresa em tempo real conforme você insere novos dados financeiros.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Não exigimos fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel, sem multas ou burocracia.',
  },
  {
    q: 'Meus dados estão seguros?',
    a: 'Totalmente. Utilizamos criptografia de ponta a ponta e servidores seguros (AWS) para garantir que as informações financeiras da sua empresa sejam acessadas apenas por você.',
  },
  {
    q: 'Como funciona o período de teste?',
    a: 'Você tem 7 dias grátis para testar todas as funcionalidades do plano Pro. Não pedimos cartão de crédito no cadastro, assim você não corre o risco de ser cobrado acidentalmente.',
  },
]

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">Tire suas dúvidas e comece com segurança.</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-slate-100 last:border-0"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-primary py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
