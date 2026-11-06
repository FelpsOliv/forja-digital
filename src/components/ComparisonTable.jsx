import { Check, Minus } from 'lucide-react'
import { comparisonRows, plans } from '../data/plans'

function Value({ value }) {
  if (value === true) return <><Check className="value-yes" aria-hidden="true" /><span className="sr-only">Incluído</span></>
  if (value === false) return <><Minus className="value-no" aria-hidden="true" /><span className="sr-only">Não incluído</span></>
  return value
}

export default function ComparisonTable() {
  return (
    <section className="comparison section-dark" aria-labelledby="comparison-title">
      <div className="section-shell">
        <div className="comparison-title reveal">
          <p className="eyebrow">Comparação direta</p>
          <h2 id="comparison-title">ENCONTRE O ESCOPO QUE <span>COMBINA COM O SEU MOMENTO.</span></h2>
        </div>
        <div className="comparison-desktop reveal">
          <table>
            <caption className="sr-only">Comparação de recursos entre os planos Essencial, Profissional e Premium</caption>
            <thead><tr><th scope="col">Recurso</th>{plans.map((plan) => <th scope="col" key={plan.id}>{plan.name}</th>)}</tr></thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={`${row.label}-${plans[index].id}`}><Value value={value} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="comparison-mobile">
          {plans.map((plan, planIndex) => (
            <article className="comparison-card reveal" key={plan.id}>
              <h3>{plan.name}</h3>
              <dl>{comparisonRows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd><Value value={row.values[planIndex]} /></dd></div>)}</dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
