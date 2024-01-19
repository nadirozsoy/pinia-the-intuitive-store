import instance from '@/config/instance'

export default {
  getCards() {
    return instance.get('/cards')
  }
}
