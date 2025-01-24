// Vehiculo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Transportador } from 'src/transportador/entities/transportador.entity';
import { Muelle } from 'src/muelle/entities/muelle.entity';
import { Carga } from 'src/carga/entities/carga.entity';
import { EstadoMuelle } from 'src/estado-muelle/entities/estado-muelle.entity';

@Entity('Vehiculo')
export class Vehiculo {
  @PrimaryGeneratedColumn()
  Id_vehiculo: number;

  @Column({ length: 50 })
  Tipo: string;

  @Column({ length: 10, unique: true })
  Placa: string;

  @Column({ type: 'enum', enum: ['Sin iniciar', 'En verificación', 'Finalizado'] })
  Estado: string;

  @ManyToOne(() => Transportador, (transportador) => transportador.vehiculos)
  transportador: Transportador;

  @OneToMany(() => Muelle, (muelle) => muelle.vehiculo)
  muelles: Muelle[];

  @OneToMany(() => Carga, (carga) => carga.vehiculo)
  cargas: Carga[];

  @OneToMany(() => EstadoMuelle, (estadoMuelle) => estadoMuelle.vehiculo)
  estadosMuelle: EstadoMuelle[];
}
