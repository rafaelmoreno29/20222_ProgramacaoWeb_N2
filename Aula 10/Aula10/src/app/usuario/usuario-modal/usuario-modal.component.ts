import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css']
})
export class UsuarioModalComponent implements OnInit {

  @Input() id: number;
  usuario: any = {};
  constructor(public activeModal: NgbActiveModal,
    public usuarioService: UsuarioService) { }
  ngOnInit(): void {
    if (this.id > 0) {
      this.usuarioService.obterUsuarioPorId(this.id).subscribe((data: any) => {
        this.usuario = data;
      });
    }
    
  }
  salvar(form) {
    if (this.id > 0) {
      this.usuarioService.editarUsuario(form.value).subscribe((data) => {
        this.activeModal.close('salvo');
      });
    }
    else {
      this.usuarioService.inserirUsuario(form.value).subscribe((data) => {
        this.activeModal.close('salvo');
      });
    }
  }

}
