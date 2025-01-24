// Despacho.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Envios } from 'src/envios/entities/envio.entity';

@Entity('Despacho')
export class Despacho {
  @PrimaryGeneratedColumn()
  Id_despacho: number;

  @Column({ type: 'datetime', nullable: true })
  Fecha: Date;

  @ManyToOne(() => Envios, (envios) => envios.despachos)
  envio: Envios;
}
