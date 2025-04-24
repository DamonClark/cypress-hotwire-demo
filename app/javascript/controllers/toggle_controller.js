import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  toggle() {
    this.outputTarget.hidden = !this.outputTarget.hidden
  }
}
