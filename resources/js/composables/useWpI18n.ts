export function useWpI18n() {
  const wp = (import.meta.client ? (window as any).wp : null) ?? null

  function __(text: string, domain?: string): string {
    return wp?.i18n?.__(text, domain) ?? text
  }

  function _n(single: string, plural: string, number: number, domain?: string): string {
    return wp?.i18n?._n(single, plural, number, domain) ?? (number === 1 ? single : plural)
  }

  function sprintf(format: string, ...args: any[]): string {
    return wp?.i18n?.sprintf(format, ...args) ?? format
  }

  return { __, _n, sprintf }
}
