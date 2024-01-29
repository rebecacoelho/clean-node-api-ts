export interface LogErrorRepository {
  logError: (accountData: string) => Promise<void>
}
