'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  ChevronRight, 
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { disciplinas } from '@/lib/data';

export default function DisciplinasPage() {
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<string | null>(null);

  const disciplinaAtual = disciplinas.find(d => d.id === disciplinaSelecionada);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Disciplinas Completas
            </h1>
            <p className="text-xl text-gray-600">
              Conteúdo organizado por disciplina com todos os tópicos essenciais
            </p>
          </div>

          {/* Grid de Disciplinas */}
          {!disciplinaSelecionada ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplinas.map((disciplina) => (
                <button
                  key={disciplina.id}
                  onClick={() => setDisciplinaSelecionada(disciplina.id)}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-green-500 text-left"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${disciplina.cor} flex items-center justify-center mb-4`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {disciplina.nome}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{disciplina.topicos.length} tópicos essenciais</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{disciplina.questoes} questões comentadas</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-green-700 font-semibold">Ver conteúdo</span>
                    <ChevronRight className="w-5 h-5 text-green-700" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Detalhes da Disciplina */
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setDisciplinaSelecionada(null)}
                className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar para disciplinas
              </button>

              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header da Disciplina */}
                <div className={`bg-gradient-to-r ${disciplinaAtual?.cor} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-4 rounded-xl">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{disciplinaAtual?.nome}</h2>
                      <p className="text-white/90 mt-1">
                        {disciplinaAtual?.questoes} questões disponíveis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Tópicos Abordados
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {disciplinaAtual?.topicos.map((topico, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium">{topico}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ações */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <Link
                      href={`/questoes?disciplina=${disciplinaAtual?.id}`}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-6 py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-center"
                    >
                      Praticar Questões
                    </Link>
                    <Link
                      href="/simulados"
                      className="flex-1 bg-white hover:bg-gray-50 text-green-700 font-bold px-6 py-4 rounded-xl border-2 border-green-600 transition-all hover:scale-105 shadow-lg text-center"
                    >
                      Fazer Simulado
                    </Link>
                  </div>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    {disciplinaAtual?.topicos.length}
                  </div>
                  <div className="text-gray-600">Tópicos</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    {disciplinaAtual?.questoes}
                  </div>
                  <div className="text-gray-600">Questões</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Comentadas</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
