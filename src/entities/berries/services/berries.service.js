import { get } from '../../../api'
import BerriesMocks from '../mocks/berries.mock.js'

export function getBerryById(id = 1) {
  return get({ url: `/berry/${id}/`, defaultMock: BerriesMocks.getBerryByIdMock })
}