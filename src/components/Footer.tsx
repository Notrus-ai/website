import Link from "next/link"

import Button from "./Button"

export default function Footer() {
  return (
    <footer className="container mx-auto ">
      <div className="p-4 md:p-16 bg-notrus-tangaroa text-white mb-8">
        <div className="flex flex-col gap-16 md:gap-40 md:flex-row">
          <div className="flex-1">
            <h3 className="text-xl font-bold pb-2">Notrus</h3>
            <p>Transforme a experiência do seu cliente com agentes de IA que oferecem suporte excepcional em todos os canais. Transforme a experiência do seu cliente com agentes de IA que oferecem suporte excepcional em todos os canais.</p>
            <div className="pt-8 pb-2 flex justify-center md:justify-start">
              <Button>Agende uma demonstração</Button>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <ul className="flex-1 group">
              <li><h4 className="font-bold pb-2">Produto</h4></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Chat com IA</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Automação de Voz</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Omnichannel</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Análises</Link></li>
            </ul>
            <ul className="flex-1 group">
              <li><h4 className="font-bold pb-2">Empresa</h4></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Casos de Sucesso</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Segurança</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Setores</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Contato</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-8 flex-wrap gap-2">
          <p className="order-2 md:order-1">Notrus © 2024. Todos os direitos reservados.</p>
          <ul className="flex gap-4 group order-1">
            <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Política de Privacidade</Link></li>
            <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Termos de Serviço</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
