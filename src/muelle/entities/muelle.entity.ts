import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Sitio } from 'src/sitio/entities/sitio.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { Envios } from 'src/envios/entities/envio.entity';
import { EstadoMuelle } from 'src/estado-muelle/entities/estado-muelle.entity';
import { Carga } from 'src/carga/entities/carga.entity';

@Entity('Muelle')
export class Muelle {
  @PrimaryGeneratedColumn()
  Id_muelle: number;

  @Column({ length: 20 })
  Nombre: string;

  @ManyToOne(() => Sitio, (sitio) => sitio.muelles)
  sitio: Sitio;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.muelles)
  vehiculo: Vehiculo;

  @OneToMany(() => Envios, (envios) => envios.muelle)
  envios: Envios[];

  @OneToMany(() => EstadoMuelle, (estadoMuelle) => estadoMuelle.muelle)
  estadosMuelle: EstadoMuelle[];

  @OneToMany(() => Carga, (carga) => carga.muelle)
  cargas: Carga[];
}
