import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Transportador } from 'src/transportador/entities/transportador.entity';
import { Muelle } from 'src/muelle/entities/muelle.entity';
import { Carga } from 'src/carga/entities/carga.entity';
import { EstadoMuelle } from 'src/estado-muelle/entities/estado-muelle.entity';
import { EstadoVehiculo } from '../dto/create-vehiculo.dto';


@Entity('Vehiculo')
export class Vehiculo {
  @PrimaryGeneratedColumn()
  Id_vehiculo: number;

  @Column({ length: 50 })
  Tipo: string;

  @Column({ length: 10})
  Placa: string;

  @Column({ 
    type: 'enum', 
    enum: EstadoVehiculo,
    default: EstadoVehiculo.SIN_VALIDAR
   })

  Estado: EstadoVehiculo;

  @ManyToOne(
    () => Transportador, 
    (transportador) => transportador.vehiculos,
    {nullable: false}
    ) 
    transportador: Transportador;

  @OneToMany(
    () => Muelle, 
    (muelle) => muelle.vehiculo
  )
    muelles: Muelle[];

  @OneToMany(
    () => Carga, 
    (carga) => carga.vehiculo
  )
    cargas: Carga[];

  @OneToMany(
    () => EstadoMuelle, 
    (estadoMuelle) => estadoMuelle.vehiculo
  )
  estadosMuelle: EstadoMuelle[];
}
