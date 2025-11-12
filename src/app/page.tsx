import Link from 'next/link';
import { 
  BookOpen, 
  Target, 
  Award, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Star,
  Clock,
  FileText,
  ShoppingCart,
  Zap,
  Lock,
  Download
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { disciplinas, estados, estatisticas } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section - Venda do E-book */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem do E-book */}
            <div className="relative order-2 lg:order-1">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1eefff8f-c012-4b35-b9af-6553d54735b9.jpg" 
                  alt="E-book AprovaPM 2025 - Concurso Polícia Militar" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-green-900 font-bold px-6 py-3 rounded-full shadow-xl animate-pulse">
                  🔥 LANÇAMENTO 2025
                </div>
              </div>
            </div>

            {/* Texto de Venda */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block bg-yellow-500 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
                ⚡ EDIÇÃO 2025 ATUALIZADA
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Conquiste sua vaga na{' '}
                <span className="text-yellow-400">
                  Polícia Militar
                </span>
              </h1>
              
              <p className="text-xl text-green-100 leading-relaxed">
                E-book completo e atualizado com conteúdo 2025 para concursos da PM de todos os 27 estados do Brasil. 
                Mais de <strong className="text-yellow-400">3.330 questões</strong>, 50+ simulados e material profissional.
              </p>

              {/* Preço e CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-500">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-green-200 text-lg line-through">R$ 197,00</span>
                  <span className="text-5xl font-bold text-yellow-400">R$ 97</span>
                  <span className="text-green-200 text-xl">,00</span>
                </div>
                <div className="text-green-100 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>Acesso imediato após pagamento</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>Atualizações gratuitas 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
                <Link 
                  href="/comprar"
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-green-900 font-bold px-8 py-5 rounded-xl transition-all hover:scale-105 shadow-2xl text-center text-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    COMPRAR AGORA
                  </div>
                </Link>
                <p className="text-center text-green-200 text-sm mt-3">
                  <Lock className="w-4 h-4 inline mr-1" />
                  Pagamento 100% seguro
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{estatisticas.totalQuestoes.toLocaleString()}</div>
                  <div className="text-sm text-green-200">Questões</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{estatisticas.totalEstados}</div>
                  <div className="text-sm text-green-200">Estados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{estatisticas.aprovados.toLocaleString()}+</div>
                  <div className="text-sm text-green-200">Aprovados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que você recebe no E-book AprovaPM 2025
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo completo e atualizado para sua aprovação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
              <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                9 Disciplinas Completas
              </h3>
              <p className="text-gray-700">
                Todo conteúdo teórico necessário para sua aprovação, organizado por disciplina
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3.330+ Questões Comentadas
              </h3>
              <p className="text-gray-700">
                Banco completo de questões com gabarito comentado e explicação detalhada
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
              <div className="bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                50+ Simulados Cronometrados
              </h3>
              <p className="text-gray-700">
                Simulados completos para treinar seu tempo e performance na prova real
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-200">
              <div className="bg-yellow-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Todos os 27 Estados
              </h3>
              <p className="text-gray-700">
                Conteúdo específico e adaptado para o concurso do seu estado
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200">
              <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Atualizado 2025
              </h3>
              <p className="text-gray-700">
                Conteúdo revisado e atualizado com as últimas mudanças e tendências
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
              <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Acesso Imediato
              </h3>
              <p className="text-gray-700">
                Receba o e-book instantaneamente após a confirmação do pagamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinas Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Disciplinas Completas
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo organizado e atualizado para sua aprovação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplinas.slice(0, 6).map((disciplina) => (
              <div
                key={disciplina.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-green-500"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${disciplina.cor} flex items-center justify-center mb-4`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {disciplina.nome}
                </h3>
                <p className="text-gray-600 mb-4">
                  {disciplina.topicos.length} tópicos essenciais
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-700 font-semibold">
                    {disciplina.questoes} questões
                  </span>
                  <span className="text-gray-500">Ver mais →</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/disciplinas"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-all hover:scale-105"
            >
              Ver Todas as Disciplinas
            </Link>
          </div>
        </div>
      </section>

      {/* Estados */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todos os Estados do Brasil
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo específico para o concurso do seu estado
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {estados.map((estado) => (
              <div
                key={estado.sigla}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 shadow-md hover:shadow-xl transition-all hover:scale-110 text-center border-2 border-transparent hover:border-green-500 cursor-pointer"
              >
                <div className="text-2xl font-bold text-green-700 mb-1">
                  {estado.sigla}
                </div>
                <div className="text-xs text-gray-600">
                  {estado.vagas} vagas
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quem já aprovou com o AprovaPM
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 15.000 aprovados em todo o Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Material completo e muito bem organizado. Consegui minha aprovação na PM-SP em 2024 estudando apenas pelo AprovaPM!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  JC
                </div>
                <div>
                  <div className="font-bold text-gray-900">João Carlos</div>
                  <div className="text-sm text-gray-600">Aprovado PM-SP 2024</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Os simulados são excelentes! Me ajudaram muito a controlar o tempo e a ansiedade na hora da prova. Recomendo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div>
                  <div className="font-bold text-gray-900">Maria Silva</div>
                  <div className="text-sm text-gray-600">Aprovada PM-RJ 2024</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Melhor investimento que fiz! Conteúdo atualizado e questões comentadas que realmente fazem diferença no aprendizado."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div>
                  <div className="font-bold text-gray-900">Pedro Santos</div>
                  <div className="text-sm text-gray-600">Aprovado PM-MG 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Garanta sua vaga na Polícia Militar em 2025
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Junte-se a mais de 15.000 aprovados que confiaram no AprovaPM
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border-2 border-yellow-500 max-w-md mx-auto">
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-green-200 text-xl line-through">R$ 197,00</span>
              <span className="text-6xl font-bold text-yellow-400">R$ 97</span>
              <span className="text-green-200 text-2xl">,00</span>
            </div>
            <p className="text-green-100 mb-6">
              Oferta especial de lançamento 2025
            </p>
            <Link 
              href="/comprar"
              className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-green-900 font-bold px-12 py-5 rounded-xl transition-all hover:scale-105 shadow-2xl text-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                COMPRAR AGORA
              </div>
            </Link>
            <p className="text-center text-green-200 text-sm mt-4">
              <Lock className="w-4 h-4 inline mr-1" />
              Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-green-100 text-sm">Acesso Imediato</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-green-100 text-sm">Garantia 7 dias</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-green-100 text-sm">Atualizações Grátis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 AprovaPM - Todos os direitos reservados
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Material de estudo para concursos da Polícia Militar
          </p>
        </div>
      </footer>
    </div>
  );
}
