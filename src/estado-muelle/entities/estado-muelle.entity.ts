import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Transportador } from 'src/transportador/entities/transportador.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { Muelle } from 'src/muelle/entities/muelle.entity';

export enum EstadoMuelleEnum {
  SIN_INICIAR = 'Sin iniciar',
  EN_VERIFICACION = 'En verificación',
  FINALIZADO = 'Finalizado'
}

@Entity({ schema: 'dev_practicantes', name: 'EstadoMuelle' })
export class EstadoMuelle {
  @PrimaryGeneratedColumn()
  Id_estado_Muelle: number;

  @Column({ type: 'enum', enum: ['Sin iniciar', 'En verificación', 'Finalizado'] })
  Estado: string;

  @Column({ type: 'timestamp', nullable: true })
  Hora_inicio: Date;

  @Column({ type: 'timestamp', nullable: true })
  Hora_fin: Date;

  @ManyToOne(() => Transportador, transportador => transportador.estadosMuelle)
  transportador: Transportador;

  @ManyToOne(() => Vehiculo, vehiculo => vehiculo.estadosMuelle)
  vehiculo: Vehiculo;

  @ManyToOne(() => Muelle, muelle => muelle.estadosMuelle)
  muelle: Muelle;
}
