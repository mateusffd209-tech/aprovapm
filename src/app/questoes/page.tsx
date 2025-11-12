'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter,
  CheckCircle,
  XCircle,
  BookOpen,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { questoesExemplo, disciplinas, estados } from '@/lib/data';

export default function QuestoesPage() {
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [filtroDisciplina, setFiltroDisciplina] = useState('todos');
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null);
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const questao = questoesExemplo[questaoAtual];

  const proximaQuestao = () => {
    if (questaoAtual < questoesExemplo.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setRespostaSelecionada(null);
      setMostrarResposta(false);
    }
  };

  const questaoAnterior = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(questaoAtual - 1);
      setRespostaSelecionada(null);
      setMostrarResposta(false);
    }
  };

  const verificarResposta = () => {
    if (respostaSelecionada !== null) {
      setMostrarResposta(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Banco de Questões
            </h1>
            <p className="text-xl text-gray-600">
              Mais de 3.330 questões comentadas e explicadas
            </p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-green-700" />
              <h3 className="text-lg font-bold text-gray-900">Filtros</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Filtro Estado */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Estado
                </label>
                <select
                  value={filtroEstado}
                  onChange={(e) => setFiltroEstado(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                >
                  <option value="todos">Todos os Estados</option>
                  {estados.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla}>
                      {estado.nome} ({estado.sigla})
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro Disciplina */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Disciplina
                </label>
                <select
                  value={filtroDisciplina}
                  onChange={(e) => setFiltroDisciplina(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                >
                  <option value="todos">Todas as Disciplinas</option>
                  {disciplinas.map((disciplina) => (
                    <option key={disciplina.id} value={disciplina.id}>
                      {disciplina.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro Ano */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ano
                </label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors">
                  <option value="todos">Todos os Anos</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
          </div>

          {/* Questão */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header da Questão */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6" />
                    <span className="font-semibold">
                      {disciplinas.find(d => d.id === questao.disciplina)?.nome}
                    </span>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    Questão {questaoAtual + 1} de {questoesExemplo.length}
                  </span>
                </div>
                <div className="text-sm text-green-100">
                  {questao.banca} • {questao.ano} • {questao.estado}
                </div>
              </div>

              {/* Conteúdo da Questão */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {questao.enunciado}
                </h3>

                <div className="space-y-3 mb-6">
                  {questao.alternativas.map((alternativa, index) => {
                    const isCorreta = index === questao.correta;
                    const isSelecionada = index === respostaSelecionada;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => !mostrarResposta && setRespostaSelecionada(index)}
                        disabled={mostrarResposta}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          mostrarResposta
                            ? isCorreta
                              ? 'border-green-500 bg-green-50'
                              : isSelecionada
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-gray-50'
                            : isSelecionada
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
                        } ${mostrarResposta ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-green-700 text-lg">
                            {String.fromCharCode(65 + index)})
                          </span>
                          <span className="text-gray-800 flex-1">{alternativa}</span>
                          {mostrarResposta && isCorreta && (
                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                          )}
                          {mostrarResposta && isSelecionada && !isCorreta && (
                            <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Botão Verificar */}
                {!mostrarResposta && (
                  <button
                    onClick={verificarResposta}
                    disabled={respostaSelecionada === null}
                    className={`w-full font-bold px-6 py-4 rounded-xl transition-all ${
                      respostaSelecionada === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:scale-105 shadow-lg'
                    }`}
                  >
                    Verificar Resposta
                  </button>
                )}

                {/* Explicação */}
                {mostrarResposta && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Explicação</h4>
                        <p className="text-blue-800 leading-relaxed">
                          {questao.explicacao}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navegação */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
                  <button
                    onClick={questaoAnterior}
                    disabled={questaoAtual === 0}
                    className={`flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition-all ${
                      questaoAtual === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Anterior
                  </button>

                  <div className="text-sm text-gray-600">
                    {questaoAtual + 1} de {questoesExemplo.length}
                  </div>

                  <button
                    onClick={proximaQuestao}
                    disabled={questaoAtual === questoesExemplo.length - 1}
                    className={`flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition-all ${
                      questaoAtual === questoesExemplo.length - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    Próxima
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  3.330
                </div>
                <div className="text-gray-600">Total de Questões</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Comentadas</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">
                  27
                </div>
                <div className="text-gray-600">Estados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
