import React, { useState } from 'react';

export default function FacturationView() {
  const [invoiceStatus, setInvoiceStatus] = useState('idle');

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0F1A14]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Facturation</h1>
          <p className="text-[#5B6A60] text-sm">3 240 € encaissés ce mois-ci</p>
        </div>
        <button className="h-[44px] bg-[#C6F432] text-[#0F1A14] px-6 rounded-lg font-bold text-sm hover:bg-[#b3de2a]">
          + Créer une facture
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-[14px] border border-[#DDE3D8]">
          <p className="text-xs text-[#5B6A60]">Revenus Octobre</p>
          <p className="text-2xl font-bold text-[#0F1A14]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>3 240 €</p>
        </div>
        <div className="bg-white p-5 rounded-[14px] border border-[#DDE3D8]">
          <p className="text-xs text-[#5B6A60]">Factures en attente</p>
          <p className="text-2xl font-bold text-[#8A4B08]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>450 €</p>
        </div>
        <div className="bg-white p-5 rounded-[14px] border border-[#DDE3D8]">
          <p className="text-xs text-[#5B6A60]">Forfaits à renouveler</p>
          <p className="text-2xl font-bold text-[#0F1A14]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>3 clients</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Dernières factures</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DDE3D8] text-xs text-[#5B6A60]">
                <th className="pb-3 font-semibold">Client</th>
                <th className="pb-3 font-semibold">Montant</th>
                <th className="pb-3 font-semibold">Statut</th>
                <th className="pb-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE3D8] text-sm">
              {[
                { client: 'Inès Bernard', amount: '350 €', status: 'Payé', ok: true },
                { client: 'Sarah M.', amount: '150 €', status: 'Forfait épuisé', ok: false },
                { client: 'Thomas L.', amount: '300 €', status: 'En attente', ok: false },
              ].map((f, i) => (
                <tr key={i}>
                  <td className="py-3 font-bold">{f.client}</td>
                  <td className="py-3">{f.amount}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${f.ok ? 'bg-[#E4F2D9] text-[#1F4D36]' : 'bg-[#FBEBD0] text-[#8A4B08]'}`}>
                      {f.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <button className="text-xs underline text-[#5B6A60]">Télécharger PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm space-y-4 h-fit">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <h2 className="text-lg font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Relances IA</h2>
          </div>

          <div className="bg-[#F3F5F0] p-4 rounded-lg border border-[#DDE3D8] space-y-3">
            <p className="text-xs text-[#0F1A14]">Sarah M. a consommé sa 10e séance. Proposer le renouvellement du forfait.</p>
            
            {invoiceStatus === 'idle' && (
              <button 
                onClick={() => setInvoiceStatus('prepared')}
                className="w-full h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-xs"
              >
                Préparer le lien de paiement
              </button>
            )}

            {invoiceStatus === 'prepared' && (
              <div className="space-y-3">
                <p className="text-[11px] font-semibold text-[#8A4B08] bg-[#FBEBD0] p-2 rounded">
                  Message préparé — À valider avant envoi
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setInvoiceStatus('done')}
                    className="flex-1 h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-xs"
                  >
                    Valider et envoyer
                  </button>
                  <button 
                    onClick={() => setInvoiceStatus('idle')}
                    className="h-[44px] px-3 border border-[#DDE3D8] bg-white rounded-lg text-xs"
                  >
                    Ignorer
                  </button>
                </div>
              </div>
            )}

            {invoiceStatus === 'done' && (
              <p className="text-xs font-bold text-[#1F4D36] bg-[#E4F2D9] p-2 rounded text-center">
                ✓ Lien de renouvellement envoyé à Sarah M.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}