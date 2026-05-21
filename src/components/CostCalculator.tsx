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

/** Custom select wrapper — appearance-none + chevron icon for consistent cross-browser styling */
function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  describedBy,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { key: string; label: string }[];
  describedBy: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-[var(--hairline-strong)] bg-[var(--paper)] pl-5 pr-12 py-3.5 text-[var(--ink)] dark:text-[var(--text-primary)] body-md focus:outline-none focus:ring-2 focus:ring-[var(--coral)] cursor-pointer"
          aria-describedby={describedBy}
        >
          {options.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron icon — positioned absolutely over the native arrow area */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4" aria-hidden="true">
          <svg className="h-4 w-4 text-[var(--muted)]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <p id={describedBy} className="sr-only">Select {label.toLowerCase()} to compare costs</p>
    </div>
  );
}

export default function CostCalculator() {
  const [role, setRole] = useState<CalculatorRoleKey>('developer');
  const [commitment, setCommitment] = useState<CalculatorCommitmentKey>('fullTime');

  const roleOptions = useMemo(
    () =>
      (Object.entries(calculatorRoles) as [CalculatorRoleKey, (typeof calculatorRoles)[CalculatorRoleKey]][]).map(
        ([key, val]) => ({ key, label: val.label })
      ),
    []
  );

  const commitmentOptions = useMemo(
    () =>
      (
        Object.entries(calculatorCommitment) as [CalculatorCommitmentKey, (typeof calculatorCommitment)[CalculatorCommitmentKey]][]
      ).map(([key, val]) => ({ key, label: val.label })),
    []
  );

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
        <SelectField
          id="calc-role"
          label="Role"
          value={role}
          onChange={(v) => setRole(v as CalculatorRoleKey)}
          options={roleOptions}
          describedBy="calc-role-desc"
        />
        <SelectField
          id="calc-commitment"
          label="Commitment"
          value={commitment}
          onChange={(v) => setCommitment(v as CalculatorCommitmentKey)}
          options={commitmentOptions}
          describedBy="calc-commitment-desc"
        />
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
