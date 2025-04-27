import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    this.outputTarget.hidden = true
  }

  toggle() {
    this.outputTarget.hidden = !this.outputTarget.hidden
  }
}
