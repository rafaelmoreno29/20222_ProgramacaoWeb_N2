import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../servicos/usuario.service';
import { UsuarioModalComponent } from './usuario-modal/usuario-modal.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any = [];
  constructor(public usuarioService: UsuarioService,
    public ngModal: NgbModal) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }
  buscarUsuarios() {
    this.usuarioService.obterUsuario().subscribe((data: any) => {
      this.usuarios = data;
    });
  }
  excluir(id) {
    this.usuarioService.excluirUsuario(id).subscribe(() => {
      console.log("Excluído com sucesso!");
      this.buscarUsuarios();
    });
  }

  abrirModal(id) {
    const modalRef = this.ngModal.open(UsuarioModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      (result) => {//close
        this.buscarUsuarios();
      },
      (reason) => {//dismiss
        // this.buscarUsuarios();
      },
    );


  }

}
