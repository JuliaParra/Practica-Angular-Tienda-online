import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
 descripcion = 'Nuevo producto';
 precio = 100.00;

}
