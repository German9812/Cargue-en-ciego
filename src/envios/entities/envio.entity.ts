// Envios.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Muelle } from 'src/muelle/entities/muelle.entity';

@Entity({ schema: 'dev_practicantes', name: 'Envios' })
export class Envios {
  @PrimaryGeneratedColumn()
  Id_envio: number;

  @Column({ length: 20 })
  Muelle: string;

  @Column({ type: 'timestamp', nullable: true })
  Fecha_despacho: Date;

  @ManyToOne(() => Muelle, (muelle) => muelle.envios)
  muelle: Muelle;
    despachos: any;
}

