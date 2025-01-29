import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Detalle } from 'src/detalle/entities/detalle.entity';

@Entity({ schema: 'dev_practicantes', name: 'Novedad' })
export class Novedad {
  @PrimaryGeneratedColumn()
  Id_novedad: number;

  @Column({ length: 50 })
  Nombre: string;

  @OneToMany(() => Detalle, (detalle) => detalle.novedad)
  detalles: Detalle[];
}
