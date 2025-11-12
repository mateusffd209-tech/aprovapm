'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  CheckCircle, 
  Lock, 
  CreditCard,
  Smartphone,
  Barcode,
  ArrowLeft,
  Shield,
  Award,
  Zap
} from 'lucide-react';
import Navbar from '@/components/custom/navbar';

export default function ComprarPage() {
  const [metodoPagamento, setMetodoPagamento] = useState<'cartao' | 'pix' | 'boleto'>('cartao');
  const [processando, setProcessando] = useState(false);

  const handleCompra = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessando(true);
    
    // Simulação de processamento
    setTimeout(() => {
      alert('🎉 Compra realizada com sucesso! Você receberá o e-book por email em instantes.');
      setProcessando(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para página inicial
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Finalizar Compra
            </h1>
            <p className="text-gray-600">
              Complete seu pedido e comece a estudar agora mesmo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulário de Pagamento */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dados de Pagamento
                </h2>

                {/* Métodos de Pagamento */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <button
                    onClick={() => setMetodoPagamento('cartao')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      metodoPagamento === 'cartao'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <CreditCard className={`w-8 h-8 mx-auto mb-2 ${
                      metodoPagamento === 'cartao' ? 'text-green-600' : 'text-gray-400'
                    }`} />
                    <div className={`text-sm font-medium ${
                      metodoPagamento === 'cartao' ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      Cartão
                    </div>
                  </button>

                  <button
                    onClick={() => setMetodoPagamento('pix')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      metodoPagamento === 'pix'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <Smartphone className={`w-8 h-8 mx-auto mb-2 ${
                      metodoPagamento === 'pix' ? 'text-green-600' : 'text-gray-400'
                    }`} />
                    <div className={`text-sm font-medium ${
                      metodoPagamento === 'pix' ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      PIX
                    </div>
                  </button>

                  <button
                    onClick={() => setMetodoPagamento('boleto')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      metodoPagamento === 'boleto'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <Barcode className={`w-8 h-8 mx-auto mb-2 ${
                      metodoPagamento === 'boleto' ? 'text-green-600' : 'text-gray-400'
                    }`} />
                    <div className={`text-sm font-medium ${
                      metodoPagamento === 'boleto' ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      Boleto
                    </div>
                  </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleCompra} className="space-y-6">
                  {/* Dados Pessoais */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Dados Pessoais
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CPF
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="000.000.000-00"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dados do Cartão (se cartão selecionado) */}
                  {metodoPagamento === 'cartao' && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Dados do Cartão
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Número do Cartão
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Validade
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="MM/AA"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Informação PIX */}
                  {metodoPagamento === 'pix' && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Smartphone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-green-900 mb-2">
                            Pagamento via PIX
                          </h3>
                          <p className="text-green-700 text-sm">
                            Após confirmar, você receberá um QR Code para pagamento instantâneo. 
                            O e-book será liberado automaticamente após a confirmação.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Informação Boleto */}
                  {metodoPagamento === 'boleto' && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Barcode className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-2">
                            Pagamento via Boleto
                          </h3>
                          <p className="text-blue-700 text-sm">
                            O boleto será gerado após a confirmação. O prazo de compensação é de até 3 dias úteis.
                            Você receberá o e-book após a confirmação do pagamento.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Botão de Compra */}
                  <button
                    type="submit"
                    disabled={processando}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processando ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Lock className="w-5 h-5" />
                        Finalizar Compra Segura
                      </span>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Ao finalizar a compra, você concorda com nossos termos de uso
                  </p>
                </form>
              </div>
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Resumo do Pedido
                </h2>

                {/* Produto */}
                <div className="mb-6">
                  <div className="flex gap-4 mb-4">
                    <img 
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1eefff8f-c012-4b35-b9af-6553d54735b9.jpg" 
                      alt="E-book AprovaPM 2025" 
                      className="w-20 h-auto rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        E-book AprovaPM 2025
                      </h3>
                      <p className="text-sm text-gray-600">
                        Edição Completa Atualizada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefícios */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>3.330+ questões comentadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>50+ simulados cronometrados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>9 disciplinas completas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Todos os 27 estados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Atualizações gratuitas 2025</span>
                  </div>
                </div>

                {/* Preço */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="line-through">R$ 197,00</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Desconto</span>
                    <span>- R$ 100,00</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-green-600">R$ 97,00</span>
                  </div>
                </div>

                {/* Garantias */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <span>Certificado de conclusão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
