import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Transportador } from 'src/transportador/entities/transportador.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { Muelle } from 'src/muelle/entities/muelle.entity';

@Entity('Estado_muelle')
export class EstadoMuelle {
  @PrimaryGeneratedColumn()
  Id_Estado_Muelle: number;

  @Column({ type: 'enum', enum: ['Sin iniciar', 'En verificación', 'Finalizado'] })
  Estado: string;

  @Column({ type: 'datetime', nullable: true })
  Hora_inicio: Date;

  @Column({ type: 'datetime', nullable: true })
  Hora_fin: Date;

  @ManyToOne(() => Transportador, (transportador) => transportador.estadosMuelle)
  transportador: Transportador;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.estadosMuelle)
  vehiculo: Vehiculo;

  @ManyToOne(() => Muelle, (muelle) => muelle.estadosMuelle)
  muelle: Muelle;
}
