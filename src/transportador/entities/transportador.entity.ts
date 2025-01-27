import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';

@Entity('Transportador')
export class Transportador {
  @PrimaryGeneratedColumn()
  Id_transportador: number;

  @Column({ length: 15 })
  Identificacion: string;

  @Column({ length: 50 })
  Nombre: string;

  @Column({ length: 12 })
  Telefono: string;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.transportador)
  vehiculos: Vehiculo[];
    estadosMuelle: any;
}
