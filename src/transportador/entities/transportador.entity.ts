import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { EstadoMuelle } from 'src/estado-muelle/entities/estado-muelle.entity';

@Entity({ schema: 'dev_practicantes', name: 'Transportador' })
export class Transportador {
  @PrimaryGeneratedColumn()
  Id_transportador: number;

  @Column({ length: 15 })
  Identificacion: string;

  @Column({ length: 50 })
  Nombre: string;

  @Column({ length: 12 })
  Telefono: string;
  
  @OneToMany(() => Vehiculo, vehiculo => vehiculo.transportador)
  vehiculos: Vehiculo[];

  // Agregar esta relación
  @OneToMany(() => EstadoMuelle, estadoMuelle => estadoMuelle.transportador)
  estadosMuelle: EstadoMuelle[];
}
