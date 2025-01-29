import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Muelle } from 'src/muelle/entities/muelle.entity';

@Entity({ schema: 'dev_practicantes', name: 'Sitio' })
export class Sitio {
  @PrimaryGeneratedColumn()
  Id_sitio: number;

  @Column({ length: 50 })
  Nombre: string;

  @OneToMany(() => Muelle, (muelle) => muelle.sitio)
  muelles: Muelle[];
}
