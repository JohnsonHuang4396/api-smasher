import type { HistoryItem } from '../types'

const history = useLocalStorage<HistoryItem[]>('__GENERATE_HISTORY__', [])

export function useHistory() {
  function insertHistory(item: Omit<HistoryItem, 'createdAt'>) {
    const createdAt = new Date().toLocaleString()
    history.value.push({ ...item, createdAt })
  }

  return {
    history,
    insertHistory
  }
}
