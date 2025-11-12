'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  FileText, 
  Play,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { simulados } from '@/lib/data';

export default function SimuladosPage() {
  const [simuladoAtivo, setSimuladoAtivo] = useState<number | null>(null);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([]);

  const iniciarSimulado = (id: number) => {
    setSimuladoAtivo(id);
    setQuestaoAtual(0);
    setRespostas([]);
  };

  const finalizarSimulado = () => {
    setSimuladoAtivo(null);
    setQuestaoAtual(0);
    setRespostas([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {!simuladoAtivo && (
            <>
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Simulados Práticos
                </h1>
                <p className="text-xl text-gray-600">
                  Treine com simulados cronometrados e prepare-se para o dia da prova
                </p>
              </div>

              {/* Estatísticas */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-8 h-8" />
                    <div className="text-3xl font-bold">50+</div>
                  </div>
                  <div className="text-blue-100">Simulados Disponíveis</div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="w-8 h-8" />
                    <div className="text-3xl font-bold">85%</div>
                  </div>
                  <div className="text-green-100">Taxa de Aprovação</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-8 h-8" />
                    <div className="text-3xl font-bold">8.5</div>
                  </div>
                  <div className="text-purple-100">Nota Média</div>
                </div>
              </div>

              {/* Lista de Simulados */}
              <div className="space-y-6">
                {simulados.map((simulado) => (
                  <div
                    key={simulado.id}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-500"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            simulado.nivel === 'Básico' ? 'bg-green-100 text-green-800' :
                            simulado.nivel === 'Intermediário' ? 'bg-blue-100 text-blue-800' :
                            simulado.nivel === 'Avançado' ? 'bg-purple-100 text-purple-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {simulado.nivel}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {simulado.titulo}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {simulado.descricao}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-green-600" />
                            <span>{simulado.questoes} questões</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span>{simulado.tempo} minutos</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>{simulado.disciplinas.length} disciplinas</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => iniciarSimulado(simulado.id)}
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        <Play className="w-5 h-5" />
                        Iniciar Simulado
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Simulado Ativo */}
          {simuladoAtivo && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header do Simulado */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">
                      {simulados.find(s => s.id === simuladoAtivo)?.titulo}
                    </h2>
                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">45:00</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span>Questão {questaoAtual + 1} de {simulados.find(s => s.id === simuladoAtivo)?.questoes}</span>
                  </div>
                </div>

                {/* Questão */}
                <div className="p-8">
                  <div className="mb-8">
                    <div className="text-sm text-gray-600 mb-2">Português - VUNESP 2023</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Assinale a alternativa em que a concordância verbal está CORRETA:
                    </h3>

                    <div className="space-y-3">
                      {['A', 'B', 'C', 'D', 'E'].map((letra, index) => (
                        <button
                          key={letra}
                          className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                          <span className="font-bold text-green-700 mr-3">{letra})</span>
                          <span className="text-gray-800">
                            {index === 0 && 'Fazem dois anos que não o vejo.'}
                            {index === 1 && 'Houveram muitos problemas na operação.'}
                            {index === 2 && 'Deve haver soluções para o caso.'}
                            {index === 3 && 'Podem existir outras explicações.'}
                            {index === 4 && 'Haviam muitas pessoas no local.'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navegação */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <button
                      onClick={finalizarSimulado}
                      className="text-gray-600 hover:text-gray-800 font-semibold"
                    >
                      Sair do Simulado
                    </button>
                    <div className="flex gap-3">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-6 py-3 rounded-lg transition-all">
                        Anterior
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-all">
                        Próxima
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa de Questões */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-4">Mapa de Questões</h4>
                <div className="grid grid-cols-10 gap-2">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <button
                      key={i}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                        i === questaoAtual
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
