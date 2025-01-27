import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { Muelle } from 'src/muelle/entities/muelle.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Detalle } from 'src/detalle/entities/detalle.entity';

@Entity('Carga')
export class Carga {
  @PrimaryGeneratedColumn()
  Id_carga: number;

  @Column({ type: 'timestamp', nullable: true })
  Fecha: Date;

  @Column({ type: 'enum', enum: ['Sin iniciar', 'En verificación', 'Finalizado'] })
  Estado: string;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.cargas)
  vehiculo: Vehiculo;

  @ManyToOne(() => Muelle, (muelle) => muelle.cargas)
  muelle: Muelle;

  @OneToMany(() => Producto, (producto) => producto.carga)
  productos: Producto[];

  @OneToMany(() => Detalle, (detalle) => detalle.carga)
  detalles: Detalle[];
}
