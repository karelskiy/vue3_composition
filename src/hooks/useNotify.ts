import { useQuasar } from 'quasar'

export enum NotifyType {
  positive = 'positive',
  negative = 'negative'
}

export const useNotify = () => {
  const $q = useQuasar()

  const notify = (type: NotifyType, message: string) => {
    $q.notify({
      type,
      message,
      position: 'top-right'
    })
  }

  return notify
}
