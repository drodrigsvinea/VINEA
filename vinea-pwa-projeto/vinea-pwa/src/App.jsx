import React from 'react';

export default function VinhedoMobileForm() {
  const atividades = [
    'Adubação Foliar',
    'Adubação Via Solo',
    'Colheita',
    'Manejos Diversos',
    'Controle de Plantas Daninhas',
    'Controle de Pragas e Doenças',
    'Poda'
  ];

  const talhoes = ['Chardonnay', 'Pinot Noir', 'Testes'];

  const subItens = {
    'Adubação Foliar': ['Hormônio', 'Fertilizante Foliar'],
    'Adubação Via Solo': ['Adubo Orgânico', 'Adubo Mineral', 'Calcário'],
    'Colheita': ['Colheita Manual', 'Transporte'],
    'Manejos Diversos': [
      'Melhorias no sistema de condução',
      'Retirada de ramos',
      'Instalação/Remoção da tela de proteção contra pragas',
      'Outros'
    ],
    'Controle de Plantas Daninhas': ['Trator', 'Roçadeira manual', 'Herbicida'],
    'Controle de Pragas e Doenças': ['Pulverização'],
    'Poda': ['Poda de produção', 'Desbrota', 'Retirada de netos', 'Desponte']
  };

  const [atividadeSelecionada, setAtividadeSelecionada] = React.useState('');
  const [subatividadeSelecionada, setSubatividadeSelecionada] = React.useState('');

  const mostrarProduto =
    atividadeSelecionada !== 'Manejos Diversos' &&
    atividadeSelecionada !== 'Poda' &&
    atividadeSelecionada !== 'Controle de Pragas e Doenças' &&
    !(atividadeSelecionada === 'Controle de Plantas Daninhas' &&
      (subatividadeSelecionada === 'Trator' ||
        subatividadeSelecionada === 'Roçadeira manual'));

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-5 space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Registro de Atividades do Vinhedo
        </h1>

        <div>
          <label className="block text-sm font-medium mb-1">Data</label>
          <input type="date" className="w-full border rounded-2xl p-3" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Talhão</label>
          <select className="w-full border rounded-2xl p-3">
            {talhoes.map((talhao) => (
              <option key={talhao}>{talhao}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Atividade</label>
          <select
            className="w-full border rounded-2xl p-3"
            value={atividadeSelecionada}
            onChange={(e) => {
              setAtividadeSelecionada(e.target.value);
              setSubatividadeSelecionada('');
            }}
          >
            <option value="">Selecione uma atividade</option>
            {atividades.map((atividade) => (
              <option key={atividade} value={atividade}>
                {atividade}
              </option>
            ))}
          </select>
        </div>

        {atividadeSelecionada && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">
                Subatividade Realizada
              </label>
              <select
                className="w-full border rounded-2xl p-3"
                value={subatividadeSelecionada}
                onChange={(e) => setSubatividadeSelecionada(e.target.value)}
              >
                <option value="">Selecione</option>
                {subItens[atividadeSelecionada].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {mostrarProduto && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Produto / Insumo
                </label>
                <input
                  type="text"
                  placeholder="Nome do produto"
                  className="w-full border rounded-2xl p-3"
                />
              </div>
            )}

            {atividadeSelecionada === 'Controle de Plantas Daninhas' &&
              subatividadeSelecionada === 'Trator' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Diesel (L)
                    </label>
                    <input
                      type="number"
                      placeholder="Quantidade utilizada"
                      className="w-full border rounded-2xl p-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Preço Diesel (R$/L)
                    </label>
                    <input
                      type="number"
                      placeholder="0,00"
                      className="w-full border rounded-2xl p-3"
                    />
                  </div>
                </div>
              )}

            {atividadeSelecionada === 'Controle de Plantas Daninhas' &&
              subatividadeSelecionada === 'Roçadeira manual' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Gasolina (L)
                      </label>
                      <input
                        type="number"
                        placeholder="Quantidade"
                        className="w-full border rounded-2xl p-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Preço Gasolina (R$/L)
                      </label>
                      <input
                        type="number"
                        placeholder="0,00"
                        className="w-full border rounded-2xl p-3"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Óleo Lubrificante (L)
                      </label>
                      <input
                        type="number"
                        placeholder="Quantidade"
                        className="w-full border rounded-2xl p-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Preço Óleo Lubrificante (R$/L)
                      </label>
                      <input
                        type="number"
                        placeholder="0,00"
                        className="w-full border rounded-2xl p-3"
                      />
                    </div>
                  </div>
                </>
              )}

            {atividadeSelecionada === 'Controle de Pragas e Doenças' && (
              <>
                <div className="space-y-4">
                  <label className="block text-sm font-medium mb-1">
                    Fungicidas Utilizados
                  </label>

                  {[1, 2, 3].map((item) => (
                    <div key={`fungicida-${item}`} className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder={`Fungicida ${item}`}
                        className="border rounded-2xl p-3"
                      />

                      <input
                        type="number"
                        placeholder="Qtd"
                        className="border rounded-2xl p-3"
                      />

                      <select className="border rounded-2xl p-3">
                        <option>Kg</option>
                        <option>L</option>
                        <option>mL</option>
                      </select>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium mb-1">
                    Inseticidas Utilizados
                  </label>

                  {[1, 2, 3].map((item) => (
                    <div key={`inseticida-${item}`} className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder={`Inseticida ${item}`}
                        className="border rounded-2xl p-3"
                      />

                      <input
                        type="number"
                        placeholder="Qtd"
                        className="border rounded-2xl p-3"
                      />

                      <select className="border rounded-2xl p-3">
                        <option>Kg</option>
                        <option>L</option>
                        <option>mL</option>
                      </select>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Redutor de pH / Espalhante Adesivo (Opcional)
                  </label>
                  <input
                    type="number"
                    placeholder="Quantidade usada"
                    className="w-full border rounded-2xl p-3"
                  />
                </div>
              </>
            )}

            {!(atividadeSelecionada === 'Controle de Plantas Daninhas' &&
              (subatividadeSelecionada === 'Roçadeira manual' ||
               subatividadeSelecionada === 'Trator')) && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Quantidade
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full border rounded-2xl p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Unidade
                </label>
                <select className="w-full border rounded-2xl p-3">
                  {subatividadeSelecionada === 'Trator' ? (
                    <option>L</option>
                  ) : (
                    <>
                      <option>Kg</option>
                      <option>L</option>
                      <option>Unidade</option>
                    </>
                  )}
                </select>
              </div>
            </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Hora Inicial
                </label>
                <input
                  type="time"
                  step="60"
                  className="w-full border rounded-2xl p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Hora Final
                </label>
                <input
                  type="time"
                  step="60"
                  className="w-full border rounded-2xl p-3"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Número de Colaboradores
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full border rounded-2xl p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Observações
              </label>
              <textarea
                rows={4}
                placeholder="Detalhes adicionais"
                className="w-full border rounded-2xl p-3"
              />
            </div>

            {atividadeSelecionada === 'Manejos Diversos' && (
              <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-4 text-sm text-yellow-800">
                Caso utilize algum produto ou insumo nesta atividade, informe no campo de observações juntamente com a quantidade utilizada.
              </div>
            )}

            <div className="bg-green-50 rounded-2xl p-4 border border-green-200 space-y-2">
              <p className="text-sm text-gray-600">Cálculo automático</p>
              <p className="font-semibold">
                Horas totais = horas trabalhadas × colaboradores
              </p>
              <p className="font-semibold">
                Valor da mão de obra = horas totais × R$15,00
              </p>
            </div>
          </>
        )}

        <button
          disabled={!atividadeSelecionada}
          className={`w-full rounded-2xl p-4 font-semibold shadow-lg text-white ${
            atividadeSelecionada
              ? 'bg-green-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Salvar Atividade
        </button>
      </div>
    </div>
  );
}
