import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals: any[] = [];

  baseSignature: Symbol = Symbol();
  setBaseModal(modal: any) {
    this.modals.push(modal);
    this.baseSignature = modal.signature;
  }
  openBase(message: string) {
    let modal = this.modals.find(
      (modal) => modal.signature === this.baseSignature
    );
    if (modal) {
      modal.open(message);
    } else {
      throw new Error('Base modal was not set!');
    }
  }
}
