import { expect } from "chai"

import {add} from "../src/index"

describe('add', () => {
  it('adds', ()=> {
    expect(add(1,2)).to.equal(3)
  })
})
