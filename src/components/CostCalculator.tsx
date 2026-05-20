import { useMemo, useState } from 'react';
import {
  calculatorRoles,
  calculatorCommitment,
  type CalculatorRoleKey,
  type CalculatorCommitmentKey,
} from '../data/comparison-rates';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CostCalculator() {
  const [role, setRole] = useState<CalculatorRoleKey>('developer');
  const [commitment, setCommitment] = useState<CalculatorCommitmentKey>('fullTime');

  const result = useMemo(() => {
    const r = calculatorRoles[role];
    const c = calculatorCommitment[commitment];
    const weeksPerYear = 52;
    const localAnnual = r.localHourly * c.hoursPerWeek * weeksPerYear;
    const potAnnual = r.potHourly * c.hoursPerWeek * weeksPerYear;
    const savings = localAnnual - potAnnual;
    const percentSaved = localAnnual > 0 ? Math.round((savings / localAnnual) * 100) : 0;
    return { localAnnual, potAnnual, savings, percentSaved };
  }, [role, commitment]);

  return (
    <div className="card p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="calc-role" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
            Role
          </label>
          <select
            id="calc-role"
            value={role}
            onChange={(e) => setRole(e.target.value as CalculatorRoleKey)}
            className="w-full rounded-full border border-[var(--hairline-strong)] bg-[var(--paper)] px-5 py-3.5 text-[var(--ink)] dark:text-[var(--text-primary)] body-md focus:outline-none focus:ring-2 focus:ring-[var(--coral)]"
            aria-describedby="calc-role-desc"
          >
            {(Object.entries(calculatorRoles) as [CalculatorRoleKey, typeof calculatorRoles.developer][]).map(
              ([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              )
            )}
          </select>
          <p id="calc-role-desc" className="sr-only">Select the role type to compare costs</p>
        </div>
        <div>
          <label htmlFor="calc-commitment" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
            Commitment
          </label>
          <select
            id="calc-commitment"
            value={commitment}
            onChange={(e) => setCommitment(e.target.value as CalculatorCommitmentKey)}
            className="w-full rounded-full border border-[var(--hairline-strong)] bg-[var(--paper)] px-5 py-3.5 text-[var(--ink)] dark:text-[var(--text-primary)] body-md focus:outline-none focus:ring-2 focus:ring-[var(--coral)]"
            aria-describedby="calc-commitment-desc"
          >
            {(Object.entries(calculatorCommitment) as [CalculatorCommitmentKey, typeof calculatorCommitment.partTime][]).map(
              ([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              )
            )}
          </select>
          <p id="calc-commitment-desc" className="sr-only">Select part-time or full-time commitment</p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        role="region"
        aria-live="polite"
        aria-label="Cost comparison results"
      >
        <div className="rounded-[18px] bg-[var(--paper)] p-5 border border-[var(--hairline)]">
          <p className="mono-label text-[var(--muted)] mb-1">Local hire (annual)</p>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] dark:text-[var(--text-primary)]">{formatCurrency(result.localAnnual)}</p>
        </div>
        <div className="rounded-[18px] bg-[var(--navy)] p-5">
          <p className="mono-label text-[rgba(244,239,230,0.65)] mb-1">POT cost (annual)</p>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--cream)]">{formatCurrency(result.potAnnual)}</p>
        </div>
        <div className="rounded-[18px] bg-[var(--cream)] p-5 border border-[var(--hairline)]">
          <p className="mono-label text-[var(--coral)] mb-1">Annual savings</p>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--coral)]">{formatCurrency(result.savings)}</p>
        </div>
        <div className="rounded-[18px] bg-[var(--white)] p-5 border border-[var(--hairline)]">
          <p className="mono-label text-[var(--muted)] mb-1">You save</p>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--navy)]">{result.percentSaved}%</p>
        </div>
      </div>
      <p className="text-xs text-[var(--text-muted)] mt-6">
        Estimates use typical US local salary equivalents vs. Pacific Ocean Tech dedicated rates. Actual savings vary by role and seniority.
      </p>
    </div>
  );
}
