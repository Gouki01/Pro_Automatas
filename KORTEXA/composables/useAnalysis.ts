export function useAnalysis() {
  const analyze = async (file: File, lang: string, token: string | null) => {
    // TODO: Implementar subida a backend .NET Core
    // Por ahora simula resultados:
    const text = await file.text()
    const words = text.split(/\s+/).filter(Boolean)
    const unique = new Set(words)
    const top = Object.entries(words.reduce((acc:any,w)=>{acc[w]=(acc[w]||0)+1;return acc},{}))
      .sort((a:any,b:any)=>b[1]-a[1]).slice(0,5)

    const data = {
      totals: { words: words.length, unique: unique.size },
      top,
      classes: { pronouns: [], names: [], verbs: [] }
    }
    return { data: { value: data }, error: { value: null } }
  }
  return { analyze }
}
