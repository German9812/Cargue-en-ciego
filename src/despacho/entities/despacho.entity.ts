import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Envios } from 'src/envios/entities/envio.entity';

@Entity({ schema: 'dev_practicantes', name: 'Despacho' })
export class Despacho {
  @PrimaryGeneratedColumn()
  Id_despacho: number;

  @Column({ type: 'timestamp', nullable: true })
  Fecha: Date;

  @ManyToOne(() => Envios, (envios) => envios.despachos)
  envio: Envios;
}