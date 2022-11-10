import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any = [];
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }
  buscarUsuarios() {
    this.usuarioService.obterUsuario().subscribe((data: any) => {
      this.usuarios = data;
    });
  }
  excluir(id){
    this.usuarioService.excluirUsuario(id).subscribe(()=>{
      console.log("Excluído com sucesso!");
      this.buscarUsuarios();
    });
  }

}
