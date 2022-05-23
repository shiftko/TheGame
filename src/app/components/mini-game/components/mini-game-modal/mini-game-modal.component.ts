import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-mini-game-modal',
  templateUrl: './mini-game-modal.component.html',
  styleUrls: ['./mini-game-modal.component.css'],
})
export class MiniGameModalComponent implements OnInit {
  signature: Symbol = Symbol();
  title: string = 'Game notice';
  message: string = '';
  isShown: boolean = false;

  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.setBaseModal(this);
  }

  open(message: string): void {
    this.message = message;
    this.isShown = true;
  }

  close(): void {
    this.isShown = false;
  }
}
