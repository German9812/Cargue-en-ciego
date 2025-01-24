// Producto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Carga } from 'src/carga/entities/carga.entity';

@Entity('Producto')
export class Producto {
  @PrimaryGeneratedColumn()
  Id_producto: number;

  @Column({ length: 30 })
  Cova: string;

  @Column({ length: 50 })
  Nombre: string;

  @Column({ length: 50, nullable: true })
  Descripcion: string;

  @ManyToOne(() => Carga, (carga) => carga.productos)
  carga: Carga;
}
