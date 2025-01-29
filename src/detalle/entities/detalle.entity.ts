// Detalle.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { Novedad } from 'src/novedad/entities/novedad.entity';
import { Carga } from 'src/carga/entities/carga.entity';

@Entity({ schema: 'dev_practicantes', name: 'Detalle' })
export class Detalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  Cantidad_registrada: string;

  @Column({ length: 10 })
  Cantidad_real: string;

  @Column({ length: 100, nullable: true })
  Observaciones: string;

  @ManyToOne(() => Producto, (producto) => producto.detalles)
  producto: Producto;

  @ManyToOne(() => Novedad, (novedad) => novedad.detalles)
  novedad: Novedad;

  @ManyToOne(() => Carga, (carga) => carga.detalles)
  carga: Carga;
}
